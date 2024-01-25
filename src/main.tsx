import { ActivityIndicator, View } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ThemeProvider } from "styled-components/native";
import globalTheme from "./theme/global-theme";
import { NavigationContainer } from "@react-navigation/native";
import { MainRoutes } from "@routes/stack-routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <ThemeProvider theme={globalTheme}>
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}