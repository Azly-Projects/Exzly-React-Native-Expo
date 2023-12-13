import React from 'react';
import { View, Text } from 'react-native';
import { SearchScreenProps } from '@interfaces';
import { blankScreen } from '@styles';

const SearchScreen: React.FC<SearchScreenProps> = () => {
  return (
    <View style={[blankScreen.wrapper]}>
      <Text style={[blankScreen.H1]}>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;
