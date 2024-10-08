import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function GoogleLoginWrapper({ children }) {
  const handleSuccess = (response) => {
    console.log(response);
  };

  return (
    <GoogleOAuthProvider clientId="#">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log('Login Failed')}
      />
      {children}
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginWrapper;