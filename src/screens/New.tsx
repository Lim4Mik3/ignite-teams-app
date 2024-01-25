
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'styled-components';
import { AirplaneLanding } from 'phosphor-react-native'

export default function New() {
  const { COLORS } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: COLORS.GRAY_400 }]}>
      <Image 
        src={require('../assets/logo.png')}
      />

      <Text>Ignite Teams</Text>
      <StatusBar style="auto" />

      <AirplaneLanding size={80} />
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
