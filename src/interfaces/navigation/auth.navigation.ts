import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParams = {
  Greeting: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Verification: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

export type AuthStackNavigationProp = NavigationProp<AuthStackParams>;

export type GreetingScreenProps = NativeStackScreenProps<AuthStackParams, 'Greeting'>;
export type SignInScreenProps = NativeStackScreenProps<AuthStackParams, 'SignIn'>;
export type SignUpScreenProps = NativeStackScreenProps<AuthStackParams, 'SignUp'>;
export type VerificationScreenProps = NativeStackScreenProps<AuthStackParams, 'Verification'>;
export type ForgotPasswordScreenProps = NativeStackScreenProps<AuthStackParams, 'ForgotPassword'>;
export type ResetPasswordScreenProps = NativeStackScreenProps<AuthStackParams, 'ForgotPassword'>;
