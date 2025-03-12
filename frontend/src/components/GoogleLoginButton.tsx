import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {FaGoogle} from "react-icons/fa";

function getCSRFToken() {
  const match = document.cookie.match(new RegExp('(^| )csrftoken=([^;]+)'));
  return match ? match[2] : null;
}

function GoogleLoginButton(){
    const googleLogin = useGoogleLogin({
        onSuccess: async ({ code }) => {
          const csrfToken = getCSRFToken();
          const tokens = await axios.post('http://localhost:8000/api/google-auth', 
            { code },  // Make sure the "code" is being sent correctly
            {
              headers: {
                'X-CSRFToken': csrfToken,
              },
            }
          );
          console.log(tokens);
        },
        flow: 'auth-code',
      });

      return (
        <button onClick={() => googleLogin()} className='btn w-64'> Connect to <FaGoogle /> </button>
      );
}

export default GoogleLoginButton;