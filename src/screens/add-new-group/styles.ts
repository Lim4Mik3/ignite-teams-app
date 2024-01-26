import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 30%;
`;

export const Input = styled.TextInput`
  padding: 20px 16px;
  margin-top: 30px;
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  flex-direction: row;
  width: 100%;

  font-size: 16px;
  line-height: 18px;
`;