import { TouchableOpacity } from "react-native";
import { Container, Logo } from "./styles";
import { CaretLeft } from 'phosphor-react-native'

interface Props {
  canGoBack?: boolean;
}

export function Header({ canGoBack = false }: Props) {
  return (
    <Container canGoBack={canGoBack}>
      {canGoBack && (
        <TouchableOpacity hitSlop={10}>
          <CaretLeft size={32} color="#FFF" />
        </TouchableOpacity>
      )}

      <Logo 
        source={require('../../assets/logo.png')}
      />
    </Container>
  )
}