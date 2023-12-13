import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParams, StackID } from '@interfaces';
import BottomTabStack from './bottom-tab.navigation';
import AboutScreen from '@screens/app/about.screen';

const Stack = createNativeStackNavigator<AppStackParams>();

export default () => (
  <Stack.Navigator
    id={StackID.AppStack}
    initialRouteName="BottomTabStack"
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#FFF',
      },
    }}>
    <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
    <Stack.Screen name="About" component={AboutScreen} />
  </Stack.Navigator>
);
