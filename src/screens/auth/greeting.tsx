import React from 'react';
import { View, Text, Button } from 'react-native';
import { GreetingScreenProps } from '@interfaces';
import { blankScreen } from '@styles';

const GreetingScreen: React.FC<GreetingScreenProps> = ({ navigation }) => {
  return (
    <View style={[blankScreen.wrapper]}>
      <Text style={[blankScreen.H1]}>Greeting Screen</Text>
      <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

export default GreetingScreen;
