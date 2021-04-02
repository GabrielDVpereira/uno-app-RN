import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthPage } from "./src/screens/AuthScreen";
import { ThemeContextProvider } from "./src/hooks/useTheme";

export default function App() {
  return (
    <ThemeContextProvider>
      <AuthPage />
    </ThemeContextProvider>
  );
}
