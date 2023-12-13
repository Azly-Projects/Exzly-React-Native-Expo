import React from 'react';
import { View, Text } from 'react-native';
import { VerificationScreenProps } from '@interfaces';
import { blankScreen } from '@styles';

const VerificationScreen: React.FC<VerificationScreenProps> = () => {
  return (
    <View style={[blankScreen.wrapper]}>
      <Text style={[blankScreen.H1]}>Verification Screen</Text>
    </View>
  );
};

export default VerificationScreen;
