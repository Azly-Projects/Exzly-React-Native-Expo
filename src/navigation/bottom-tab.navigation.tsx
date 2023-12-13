import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomTabStackParams, StackID } from '@interfaces';
import HomeScreen from '@screens/app/home.screen';
import AccountScreen from '@screens/user/account.screen';

const Stack = createBottomTabNavigator<BottomTabStackParams>();

export default () => (
  <Stack.Navigator
    id={StackID.BottomTabStack}
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
    sceneContainerStyle={{
      backgroundColor: '#FFF',
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        tabBarIcon: ({ size, color }) => <Ionicons size={size} color={color} name="home" />,
        tabBarShowLabel: false,
      }}
    />
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{
        title: 'Account',
        tabBarIcon: ({ size, color }) => (
          <Ionicons size={size} color={color} name="person-circle" />
        ),
        tabBarShowLabel: false,
      }}
    />
  </Stack.Navigator>
);
