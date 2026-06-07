import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const getDefaultTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme());

  const toggleTheme = () => {
    const getTheme = theme === "light" ? "dark" : "light";
    setTheme(getTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
