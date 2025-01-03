"use client";
import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../styles/theme"; // Import your themes

const ThemeModeContext = createContext({
  toggleTheme: () => {},
  mode: "light" as "light" | "dark", // Default mode
});

export const useThemeMode = () => useContext(ThemeModeContext);

const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to manage theme mode, defaulting to "light"
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Load the saved theme from localStorage or default to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setMode(savedTheme as "light" | "dark");
    } else {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setMode(systemPreference);
    }
  }, []);

  // Save the theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  // Select the theme based on mode
  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeModeContext.Provider value={{ toggleTheme, mode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default CustomThemeProvider;
