// LoginButton.tsx - A simple component that triggers Google login
import React from 'react';

const LoginButton: React.FC = () => {
  const initiateGoogleLogin = () => {
    const authUrl = 'https://schuffle.up.railway.app/api/google-auth'; // Hardcode the URL if it's static
    window.location.href = authUrl;
  };

  return (
    <button onClick={initiateGoogleLogin}>
      Login with Google
  </button>
  );
};

export default LoginButton;
