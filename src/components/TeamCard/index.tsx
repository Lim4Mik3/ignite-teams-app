import { UsersThree } from 'phosphor-react-native'
import { Container, Title } from "./styles";
import { useTheme } from 'styled-components/native';

interface TeamCardProps { 
  title: string;
}

export function TeamCard({ title }: TeamCardProps) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <UsersThree size={32} color={COLORS.GREEN_500} />

      <Title>{title}</Title>
    </Container>
  )
}