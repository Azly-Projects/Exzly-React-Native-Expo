import React from 'react';
import { View, Text, Button } from 'react-native';
import { SignUpScreenProps } from '@interfaces';
import { blankScreen } from '@styles';

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  return (
    <View style={[blankScreen.wrapper]}>
      <Text style={[blankScreen.H1]}>Sign Up Screen</Text>
      <View style={[blankScreen.HStack, { justifyContent: 'space-around', alignItems: 'center' }]}>
        <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
        <Button title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
      </View>
    </View>
  );
};

export default SignUpScreen;
