import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DemoComponent() {
  const [demoContent, setDemoContent] = useState('');

  useEffect(() => {
    // Retrieve the authentication token from your authentication state or storage
    const authToken = localStorage.getItem('authToken');

    // Make an API call to the demo controller endpoint
    axios.get('http://localhost:8080/api/v1/demo-controller', {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }).then(response => {
        const content = response.data; // Assuming the actual content is returned in the response data
        setDemoContent(content);
    }).catch(error => {
      console.error('Error retrieving demo content:', error);
    });
  }, []);

  return (
    <div>
      <h2>Demo Component</h2>
      <p>{demoContent}</p>
    </div>
  );
}

export default DemoComponent;
