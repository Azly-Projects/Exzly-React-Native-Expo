import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackID, UserStackParams } from '@interfaces';
import UserProfileScreen from '@screens/user/user-profile.screen';

const Stack = createNativeStackNavigator<UserStackParams>();

export default () => (
  <Stack.Navigator
    id={StackID.UserStack}
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: 'white',
      },
    }}>
    <Stack.Screen name="Profile" component={UserProfileScreen} />
  </Stack.Navigator>
);
