'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TestWebhook() {
  const [formData, setFormData] = useState({
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message'
  });
  
  const [testResult, setTestResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const testWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTestResult('Sending test message...');
    
    // Try multiple methods to ensure webhook receives data
    
    // Method 1: Fetch API
    try {
      fetch('https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          setTestResult(prev => prev + `\nFetch Response: ${response.status}`);
          return response.text();
        })
        .then(data => {
          setTestResult(prev => prev + `\nFetch Data: ${data}`);
        })
        .catch(error => {
          setTestResult(prev => prev + `\nFetch Error: ${error.message}`);
        });
    } catch (error) {
      setTestResult(prev => prev + `\nFetch Exception: ${error}`);
    }
    
    // Method 2: XMLHttpRequest
    setTimeout(() => {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            setTestResult(prev => prev + `\nXHR Status: ${xhr.status}`);
            setTestResult(prev => prev + `\nXHR Response: ${xhr.responseText}`);
            setIsLoading(false);
          }
        };
        xhr.onerror = function() {
          setTestResult(prev => prev + `\nXHR Network Error`);
          setIsLoading(false);
        };
        xhr.send(JSON.stringify(formData));
      } catch (error) {
        setTestResult(prev => prev + `\nXHR Exception: ${error}`);
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '100px auto', 
      padding: '20px', 
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ marginBottom: '20px' }}>Webhook Test Page</h1>
      <Link href="/" style={{ 
        display: 'inline-block', 
        marginBottom: '20px',
        color: 'blue',
        textDecoration: 'underline'
      }}>
        Back to Home
      </Link>
      
      <form onSubmit={testWebhook}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              minHeight: '100px'
            }}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.7 : 1
          }}
        >
          {isLoading ? 'Sending...' : 'Test Webhook'}
        </button>
      </form>
      
      {testResult && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          whiteSpace: 'pre-line'
        }}>
          <h3>Test Results:</h3>
          <div>{testResult}</div>
        </div>
      )}
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>Webhook URL: <code>https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol</code></p>
      </div>
    </div>
  );
} 