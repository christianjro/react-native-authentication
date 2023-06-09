import { useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../utils/auth';
import { Alert } from 'react-native-web';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true)
    try {
      await login(email, password)
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later.'
      )
    }
    setIsAuthenticating(false)
  }

  return (
    <>
      {isAuthenticating ? 
        <LoadingOverlay />
        : 
        <AuthContent isLogin onAuthenticate={loginHandler}/>
      }
    </>
  );
}

export default LoginScreen;