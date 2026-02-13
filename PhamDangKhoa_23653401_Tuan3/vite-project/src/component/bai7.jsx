import React, { createContext, useContext, useState, useEffect } from "react";

// Tạo Context
const ThemeContext = createContext();

export default function App() {
  // Lấy theme từ localStorage nếu có
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Persist theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
}

//- Layout -
function Layout() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "40px",
    transition: "0.3s",
  };

  return (
    <div style={styles}>
      <h1>Theme Switcher</h1>
      <Card />
    </div>
  );
}

// - Card -
function Card() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    border: "1px solid",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
  };

  return (
    <div style={styles}>
      <p>This is a Card component</p>
      <Button />
    </div>
  );
}

// - Button -
function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
    backgroundColor: theme === "light" ? "#000" : "#fff",
    color: theme === "light" ? "#fff" : "#000",
  };

  return (
    <button style={styles} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
