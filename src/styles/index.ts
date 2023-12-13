import { StyleSheet } from 'react-native';

export const blankScreen = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  HStack: {
    flexDirection: 'row',
  },
  VStack: {
    flexDirection: 'column',
  },
  H1: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
