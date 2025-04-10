'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CareersPage = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Create a new object for webhook submission (different from the formData type)
    const webhookData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      resumeFileName: formData.resume ? formData.resume.name : null,
      message: formData.message
    };
    
    // Show sending notification
    alert('Sending your application data...');
    
    // Send data directly to webhook with XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        console.log('Webhook response status:', xhr.status);
        console.log('Webhook response:', xhr.responseText);
        
        if (xhr.status >= 200 && xhr.status < 300) {
          alert('Application submitted successfully! Status: ' + xhr.status);
          router.push('/thank-you?from=careers');
        } else {
          alert('Error submitting application. Status: ' + xhr.status);
          console.error('Error response:', xhr.responseText);
        }
      }
    };
    xhr.onerror = function() {
      console.error('Network error occurred');
      alert('A network error occurred. Please try again.');
    };
    xhr.send(JSON.stringify(webhookData));
  };
  
  return (
    <div>
      <h1>Careers Page</h1>
      {/* Form components would go here */}
    </div>
  );
};

export default CareersPage; 