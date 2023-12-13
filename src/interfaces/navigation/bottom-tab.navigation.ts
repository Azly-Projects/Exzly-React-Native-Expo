import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type BottomTabStackParams = {
  Home: undefined;
  Search: undefined;
  Account: undefined;
};

export type BottomStackNavigationProp = NavigationProp<BottomTabStackParams>;

export type HomeScreenProps = NativeStackScreenProps<BottomTabStackParams, 'Home'>;
export type SearchScreenProps = NativeStackScreenProps<BottomTabStackParams, 'Search'>;
export type AccountScreenProps = NativeStackScreenProps<BottomTabStackParams, 'Account'>;
