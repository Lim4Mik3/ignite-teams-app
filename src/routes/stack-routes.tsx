import { createStackNavigator } from '@react-navigation/stack';
import New from '@screens/New';

const Stack = createStackNavigator();

export function MainRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="New" component={New} />
    </Stack.Navigator>
  );
}