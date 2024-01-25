import { ActivityIndicator, View } from "react-native";
import Home from "./screens/Home";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ThemeProvider } from "styled-components/native";
import globalTheme from "./theme/global-theme";

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
      <Home />
    </ThemeProvider>
  )
}