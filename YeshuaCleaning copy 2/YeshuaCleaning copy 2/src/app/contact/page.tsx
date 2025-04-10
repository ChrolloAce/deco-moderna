import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ContactPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading message
    alert('Submitting your information...');
    
    // Get all form data
    const formDataForSubmission = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      // Include timestamp for tracking
      timestamp: new Date().toISOString(),
      source: 'contact-form'
    };
    
    console.log('Sending data to webhook:', formDataForSubmission);
    
    // Use JavaScript's built-in fetch API
    fetch('https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataForSubmission),
    })
    .then(response => {
      console.log('Response status:', response.status);
      
      if (response.status >= 200 && response.status < 300) {
        alert('Form submitted successfully!');
        router.push('/thank-you');
      } else {
        throw new Error('Form submission failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error.message);
    });
  };

  return (
    <div>
      {/* Render your form here */}
    </div>
  );
};

export default ContactPage; 