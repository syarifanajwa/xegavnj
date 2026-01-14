"use client";
import { createContext, useContext, useState } from "react";

const themes = {
  light: {
    background: "#ffffff",
    text: "#111827",
  },
  dark: {
    background: "#111827",
    text: "#f9fafb",
  },
  colorful: {
    background: "#fdf2f8",
    text: "#831843",
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light");

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: themes[themeName].background,
          color: themes[themeName].text,
          transition: "0.3s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
