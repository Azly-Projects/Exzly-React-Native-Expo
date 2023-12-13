import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserID } from '@interfaces';
import { NavigationProp } from '@react-navigation/native';

export type UserStackParams = {
  Profile: { id: UserID };
};

export type UserStackNavigationProp = NavigationProp<UserStackParams>;

export type UserProfileScreenProps = NativeStackScreenProps<UserStackParams, 'Profile'>;
