// LoginButton.tsx - A simple component that triggers Google login
import React from 'react';

const LoginButton: React.FC = () => {
  const initiateGoogleLogin = async () => {
    try {
      // Fetch the authorization URL from your backend
      const response = await fetch('https://schuffle.up.railway.app/api/google-auth');
      if (!response.ok) throw new Error('Failed to fetch the Google authorization URL.');
  
      const { authUrl }: { authUrl: string } = await response.json();
      
      // Log the URL to verify it's correct
      console.log("Google Authorization URL:", authUrl);
  
      // Check if the authUrl is present
      if (authUrl) {
        // Redirect to the Google login page
        window.location.href = authUrl;
      } else {
        throw new Error('Authorization URL is missing.');
      }
    } catch (error) {
      console.error('Google login flow error:', error);
    }
  };
  

  return (
    <button onClick={initiateGoogleLogin}>
      Login with Google
  </button>
  );
};

export default LoginButton;
