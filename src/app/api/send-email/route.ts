import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Ensure these are set in your .env.local file
const gmailEmail = process.env.GMAIL_EMAIL;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
const toEmail = process.env.TO_EMAIL;

export async function POST(req: NextRequest) {
  if (!gmailEmail || !gmailAppPassword || !toEmail) {
    console.error('Missing Gmail credentials or recipient email in environment variables.');
    return NextResponse.json({ error: 'Email configuration missing.' }, { status: 500 });
  }

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailAppPassword,
    },
  });

  try {
    const body = await req.json();
    const { name, email, phone, message, service, zipcode, source, formLocation } = body;

    // Construct email subject
    const subject = `New Lead from ${formLocation || 'Website Form'}: ${name}`;

    // Construct email body (HTML for better formatting)
    let emailBody = `
      <html>
        <head>
          <style>
            body { font-family: sans-serif; line-height: 1.6; }
            p { margin-bottom: 10px; }
            strong { font-weight: bold; }
          </style>
        </head>
        <body>
          <h2>New Lead Submission</h2>
          <p><strong>Source:</strong> ${source || 'N/A'}</p>
          <p><strong>Form Location:</strong> ${formLocation || 'N/A'}</p>
          <hr>
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
      emailBody += `<hr><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`;
    }
    
    emailBody += `
        </body>
      </html>
    `;

    // Setup email data
    const mailOptions = {
      from: `"${formLocation || 'Deco Moderna Website'}" <${gmailEmail}>`, // Sender address (shows website name)
      to: toEmail, // List of receivers
      subject: subject, // Subject line
      html: emailBody, // HTML body content
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully using Nodemailer.');
    return NextResponse.json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Nodemailer API Route Error:', error);
    // Check for specific Nodemailer errors if needed
    if (error instanceof Error && 'code' in error) {
        const nodemailerError = error as any; // Type assertion to access code
        if (nodemailerError.code === 'EAUTH') {
             return NextResponse.json({ error: 'Authentication failed. Check Gmail credentials and App Password.' }, { status: 401 });
        }
    }
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
} 