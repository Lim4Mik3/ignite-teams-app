import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 24px 16px;
  flex-direction: row;
  gap: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;