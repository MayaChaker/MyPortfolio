import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Mode() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const IsDArkMode = document.documentElement.classList.contains("dark");
  }, []);
  const theme = () => {
    const root = window.document.documentElement;
    const CurrentDark = root.classList.contains("light");
    if (CurrentDark) {
      root.classList.remove("light");
      setLight(false);
    } else {
      root.classList.add("light");
      setLight(true);
    }
  };
  return (
    <button
      onClick={theme}
      className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 [.light_&]:bg-gray-200 [.light_&]:hover:bg-gray-300 transition-all duration-300 active:scale-95 shadow-md"
      aria-label="Toggle Theme"
    >
      {light ? (
        <FaMoon className="text-blue-600 text-xl animate-spin-slow" />
      ) : (
        <FaSun className="text-yellow-500 text-xl" />
      )}
    </button>
  );
}

export default Mode;
