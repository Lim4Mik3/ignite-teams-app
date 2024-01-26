import { useTheme } from 'styled-components';
import { Container, Title } from './styles'

interface LargeButtonProps {
  color?: string;
  children: string;
  onPress: () => void;
}

export function LargeButton({ color, children, onPress }: LargeButtonProps) {
  const { COLORS } = useTheme();

  return (
    <Container 
      activeOpacity={0.7} 
      onPress={onPress} 
      style={{ backgroundColor: color ?? COLORS.GREEN_500 }}
    >
      <Title>{children}</Title>
    </Container>
  )
}