import React, { useEffect, useState } from 'react';
import DemoComponent from './DemoComponent';
import { extractUserRole } from './authUtils';

function WelcomeContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    console.log(authToken);
    if (authToken) {
      try {
        const role = extractUserRole(authToken);
        console.log(role);
        setIsLoggedIn(true);
        setUserRole(role);
      } catch (error) {
        console.error('Error decoding token:', error);
        setIsLoggedIn(false);
        setUserRole('');
      }
    } else {
      setIsLoggedIn(false);
      setUserRole('');
    }
  }, []);

  const renderContent = () => {
    if (!isLoggedIn) {
      return <p>Login to see protected content</p>;
    } else {
      if (userRole === 'USER') {
        return <p>Hello, User</p>;
      } else if (userRole === 'ADMIN') {
        return <DemoComponent/>;
      }
    }
  };

  return (
    <div>
      <h1>Welcome</h1>
      {renderContent()}
    </div>
  );
}

export default WelcomeContent;
