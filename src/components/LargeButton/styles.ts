import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin: 10px 0;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 16px 0;
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;