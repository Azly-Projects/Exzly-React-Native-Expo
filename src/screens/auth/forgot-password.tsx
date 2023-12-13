import React from 'react';
import { View, Text, Button } from 'react-native';
import { ForgotPasswordScreenProps } from '@interfaces';
import { blankScreen } from '@styles';

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  return (
    <View style={[blankScreen.wrapper]}>
      <Text style={[blankScreen.H1]}>Forgot Password Screen</Text>
      <View style={[blankScreen.HStack, { justifyContent: 'space-around', alignItems: 'center' }]}>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
