import { TouchableOpacity } from "react-native";
import { Container, Logo } from "./styles";
import { CaretLeft } from 'phosphor-react-native'
import { useNavigation } from "@react-navigation/native";

interface Props {
  canGoBack?: boolean;
}

export function Header({ canGoBack = false }: Props) {
  const navigation = useNavigation();

  return (
    <Container canGoBack={canGoBack}>
      {canGoBack && (
        <TouchableOpacity hitSlop={10} onPress={() => navigation.goBack()}>
          <CaretLeft size={32} color="#FFF" />
        </TouchableOpacity>
      )}

      <Logo 
        source={require('../../assets/logo.png')}
      />
    </Container>
  )
}