"use client";
import { createContext, useContext, useState } from "react";

import { themes } from "../theme.js";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          minHeight: "100vh",
          background: themes[theme].background,
          color: themes[theme].text,
          transition: "0.3s",
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
