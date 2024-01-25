
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'styled-components';

export default function Home() {
  const { COLORS } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: COLORS.GRAY_400 }]}>
      <Text>Ignite Teams</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
