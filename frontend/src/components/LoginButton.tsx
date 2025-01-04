// LoginButton.tsx - A simple component that triggers Google login
import React from 'react';

const LoginButton: React.FC = () => {
  const initiateGoogleLogin = async () => {
    try {
      const response = await fetch('https://schuffle.up.railway.app/api/google-auth');
      if (!response.ok) throw new Error('Failed to fetch the Google authorization URL.');
      const { authUrl }: { authUrl: string } = await response.json();
      window.location.href = authUrl;
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
