import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { SignInScreenProps } from '@interfaces';
import { blankScreen } from '@styles';
import { useAuth } from '@contexts';

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const { setIsAuthenticated } = useAuth();

  return (
    <View style={[blankScreen.wrapper]}>
      <Pressable onPress={() => setIsAuthenticated(true)}>
        <Text style={[blankScreen.H1]}>Sign In Screen</Text>
      </Pressable>
      <View style={[blankScreen.HStack, { justifyContent: 'space-around', alignItems: 'center' }]}>
        <Button title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
};

export default SignInScreen;
