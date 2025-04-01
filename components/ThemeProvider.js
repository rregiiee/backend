"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(); // Buat context

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null); // ⬅️ Hindari mismatch SSR

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"; // Default ke "dark"
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  if (!theme) return null; // ⬅️ Hindari render sebelum theme ada

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
        {children}

        {/* ✅ Perbaikan Warna Tombol */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`fixed bottom-5 left-5 p-3 rounded-full shadow-lg transition-colors duration-300
            ${theme === "dark" ? "bg-white text-black border border-black" : "bg-black text-white border border-white"}`}
        >
          {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </ThemeContext.Provider>
  );
}
