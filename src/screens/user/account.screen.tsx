import React from 'react';
import { View, Text, Button } from 'react-native';
import { AccountScreenProps } from '@interfaces';
import { useAuth } from '@contexts';
import { blankScreen } from '@styles';

const AccountScreen: React.FC<AccountScreenProps> = () => {
  const { setIsAuthenticated } = useAuth();
  return (
    <View style={[blankScreen.wrapper]}>
      <Text style={[blankScreen.H1]}>Account Screen</Text>
      <Button title="Sign Out" onPress={() => setIsAuthenticated(false)} />
    </View>
  );
};

export default AccountScreen;
