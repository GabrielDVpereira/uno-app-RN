import React, { ReactNode } from "react";
import { Container, TopAuxDraw, TopMainDraw, BottomDraw } from "./styles";

interface BaseAuthScreenProps {
  children: ReactNode;
}
export function BaseAuthScreen({ children }: BaseAuthScreenProps) {
  return (
    <Container>
      <TopMainDraw />
      <TopAuxDraw />
      {children}
      <BottomDraw />
    </Container>
  );
}
