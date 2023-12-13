import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParams, StackID } from '@interfaces';
import GreetingScreen from '@screens/auth/greeting';
import SignInScreen from '@screens/auth/sign-in';
import SignUpScreen from '@screens/auth/sign-up';
import VerificationScreen from '@screens/auth/verification';
import ForgotPasswordScreen from '@screens/auth/forgot-password';
import ResetPasswordScreen from '@screens/auth/reset-password';

const Stack = createNativeStackNavigator<AuthStackParams>();

export default () => (
  <Stack.Navigator
    id={StackID.AuthStack}
    initialRouteName="Greeting"
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#FFF',
      },
    }}>
    <Stack.Screen name="Greeting" component={GreetingScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="Verification" component={VerificationScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
  </Stack.Navigator>
);
