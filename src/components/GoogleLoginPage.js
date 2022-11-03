import React from 'react'
import GoogleLogin from 'react-google-login';
import post from "utils/post";
import { useCallback } from 'react';
const GoogleLoginPage = () => {
    const onGoogleLoginSuccess = useCallback(
      (response) => {
        const idToken = response.tokenId;
        const data = {
          email: response.profileObj.email,
          first_name: response.profileObj.givenName,
          last_name: response.profileObj.familyName,
        };

        validateTokenAndObtainSession({ data, idToken })
          .then(console.log("GG"))
          .catch(console.log("GError"));
      },
    );
    const onGoogleLoginFailure = useCallback((response) => {
      console.log("Google login failed: ", response);
    });
    const validateTokenAndObtainSession = ({ data, idToken }) => {
      const headers = {
        Authorization: idToken,
        "Content-Type": "application/json",
      };

      return post("http://127.0.0.1:8000/auth/google-login/", data, {
        headers,
      });
    };
  return (
    <GoogleLogin
      clientId="http://291915461156-qvqhctcrsusf10vi4rd30f0higp2c9to.apps.googleusercontent.com/" // your Google app client ID
      buttonText="Sign in with Google"
      onSuccess={onGoogleLoginSuccess} // perform your user logic here
      onFailure={onGoogleLoginFailure} // handle errors here
    />
  );
}

export default GoogleLoginPage