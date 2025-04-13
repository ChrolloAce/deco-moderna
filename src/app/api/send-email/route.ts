import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req: NextRequest) {
  if (!fromEmail || !toEmail) {
    return NextResponse.json({ error: 'Sender or receiver email not configured.' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const { name, email, phone, message, service, zipcode, source, formLocation } = body;

    // Construct email subject
    const subject = `New Lead from ${formLocation || 'Website Form'}: ${name}`;

    // Construct email body
    let emailBody = `
      <h1>New Lead Submission</h1>
      <p><strong>Source:</strong> ${source || 'N/A'}</p>
      <p><strong>Form Location:</strong> ${formLocation || 'N/A'}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
    `;

    if (service) {
      emailBody += `<p><strong>Service Interest:</strong> ${service}</p>`;
    }
    if (zipcode) {
      emailBody += `<p><strong>Zip Code:</strong> ${zipcode}</p>`;
    }
    if (message) {
      emailBody += `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`;
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: subject,
      html: emailBody,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
} 