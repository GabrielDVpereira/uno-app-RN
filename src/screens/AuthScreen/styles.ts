import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
const TopDraw = css`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const TopMainDraw = styled.View`
  ${TopDraw}
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const TopAuxDraw = styled.View`
  ${TopDraw}
  background-color: ${({ theme }) => theme.colors.background};
  border-top-right-radius: 350px;
`;
export const BottomDraw = styled.View`
  width: 300px;
  height: 300px;
  position: absolute;
  left: -150px;
  bottom: -150px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 300px;
  transform: scaleX(1.4);
  z-index: -1;
`;
