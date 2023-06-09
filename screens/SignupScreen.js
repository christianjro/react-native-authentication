import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../utils/auth';


function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true)
    await createUser(email, password)
    setIsAuthenticating(false)
  }

  
  return (
    <>
      {isAuthenticating ? 
        <LoadingOverlay message="Creating user..." />
        : 
        <AuthContent onAuthenticate={signupHandler}/>
      }
    </>
  );
}

export default SignupScreen;