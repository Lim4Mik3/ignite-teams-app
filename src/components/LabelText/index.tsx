import { View } from "react-native";
import { Container, Title, Subtitle } from "./styles";

type Props = {
  title: string;
  subtitle: string;
} & React.ComponentProps<typeof View>;

export function LabelText({ title, subtitle, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}