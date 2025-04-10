'use client';

export default function TestDirect() {
  // Function to send test data to webhook directly
  const testWebhook = () => {
    // Simple test data
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message',
      timestamp: new Date().toISOString(),
      source: 'direct-test'
    };
    
    // Show alert before sending
    alert("Sending test data to webhook...");
    
    // Log to console
    console.log("Test data:", testData);
    
    // Send directly with fetch
    fetch('https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })
    .then(response => {
      console.log("Response status:", response.status);
      console.log("Response:", response);
      
      // Show response in alert
      alert(`Response status: ${response.status}\n\nIf status is 200, webhook received the data!`);
    })
    .catch(error => {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    });
  };
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: '20px' }}>Direct Webhook Test</h1>
      <p style={{ marginBottom: '20px' }}>
        This page tests a direct POST to the webhook URL:<br />
        <code>https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol</code>
      </p>
      
      <button 
        onClick={testWebhook} 
        style={{ 
          padding: '15px 30px', 
          fontSize: '16px', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Send Test Data Now
      </button>
      
      <p style={{ marginTop: '20px' }}>
        Check the browser console for detailed results.
      </p>
      
      <div style={{ marginTop: '40px' }}>
        <a 
          href="/" 
          style={{ 
            color: 'blue', 
            textDecoration: 'underline' 
          }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
} 