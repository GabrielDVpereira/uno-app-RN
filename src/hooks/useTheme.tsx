import React from "react";
import { useContext, ReactNode } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import { theme } from "../assets/theme";

interface ThemeContextProviderProps {
  children: ReactNode;
}
export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
