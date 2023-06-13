import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/authContext';
import { createUser } from '../utils/auth';


function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authCtx = useContext(AuthContext)

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true)
    try {
      const token = await createUser(email, password)
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Count not create user, please check your inputs and try again later.'
      )
      setIsAuthenticating(false)
    }
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