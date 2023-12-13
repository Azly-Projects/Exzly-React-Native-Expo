import React from 'react';
import { View, Text } from 'react-native';
import { ResetPasswordScreenProps } from '@interfaces';
import { blankScreen } from '@styles';

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = () => {
  return (
    <View style={[blankScreen.wrapper]}>
      <Text style={[blankScreen.H1]}>Reset Password Screen</Text>
    </View>
  );
};

export default ResetPasswordScreen;
