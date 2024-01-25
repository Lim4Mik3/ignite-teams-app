
import { FlatList, StyleSheet, View } from 'react-native';
import { useTheme } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@components/Header';
import { LabelText } from '@components/LabelText';
import { TeamCard } from '@components/TeamCard';
import { ButtonTitle, FooterButton } from './styles';

export default function Teams() {
  const { COLORS } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.GRAY_400 }]}>
      <Header />

      <LabelText 
        style={{ marginTop: 32 }}
        title="Turmas" 
        subtitle="jogue com a sua turma" 
      />

      <FlatList 
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        style={{ margin: 8 }}
        contentContainerStyle={{ paddingVertical: 16, gap: 12 }}
        showsVerticalScrollIndicator={false}
        renderItem={(props) => 
          <TeamCard 
            title='Grupo 1'
          />
        }
      />

      <FooterButton activeOpacity={0.7}>
        <ButtonTitle>Criar nova turma</ButtonTitle>
      </FooterButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
