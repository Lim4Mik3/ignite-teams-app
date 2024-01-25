import styled, { css } from "styled-components/native";

interface ContainerProps {
  canGoBack: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-grow: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 0;

  ${props => props.canGoBack && css`
    justify-content: space-between;
  `};
`;

export const Logo = styled.Image`
  width: 40px;
  height: 55px;
`;