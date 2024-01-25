import { createStackNavigator } from '@react-navigation/stack';
import New from '@screens/New';
import Teams from '@screens/teams';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

const Stack = createStackNavigator();

export function MainRoutes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ backgroundColor: COLORS.GRAY_600, flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen 
          name="teams" 
          component={Teams} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </View>
  );
}