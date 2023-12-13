import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParams = {
  BottomTabStack: undefined;
  About: undefined;
};

export type AppStackNavigationProp = NavigationProp<AppStackParams>;

export type AboutScreenProps = NativeStackScreenProps<AppStackParams, 'About'>;
