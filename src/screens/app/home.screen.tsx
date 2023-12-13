import React from 'react';
import { View, Text, Button } from 'react-native';
import { AppStackNavigationProp, HomeScreenProps } from '@interfaces';
import { blankScreen } from '@styles';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={[blankScreen.wrapper]}>
      <Text style={[blankScreen.H1]}>Home Screen</Text>
      <Button
        title="About"
        onPress={() => navigation.getParent<AppStackNavigationProp>().navigate('About')}
      />
    </View>
  );
};

export default HomeScreen;
