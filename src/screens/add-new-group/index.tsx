import { Header } from "@components/Header";
import { StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components";

import { UsersThree } from 'phosphor-react-native'
import { LabelText } from "@components/LabelText";
import { Content, Input } from "./styles";
import { LargeButton } from "@components/LargeButton";
import { useNavigation } from "@react-navigation/native";

export function AddNewGroup() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.GRAY_400 }]}>
      <Header canGoBack />

      <Content>
        <UsersThree style={{ marginBottom: 24 }} size={48} color={COLORS.GREEN_500} />

        <LabelText title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />

        <Input />

        <LargeButton onPress={() => navigation.goBack()}>
          Criar
        </LargeButton>
      </Content>

   
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
