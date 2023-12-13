import React from 'react';
import { View, Text, Button } from 'react-native';
import { AboutScreenProps } from '@interfaces';
import { blankScreen } from '@styles';

const AboutScreen: React.FC<AboutScreenProps> = ({ navigation }) => {
  return (
    <View style={blankScreen.wrapper}>
      <Text style={[blankScreen.H1]}>About Screen</Text>
      <Button title="Back" onPress={() => navigation.navigate('BottomTabStack')} />
    </View>
  );
};

export default AboutScreen;
