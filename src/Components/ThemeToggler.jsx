import ThemeContext from "../context/ThemeProvider";
import { useContext } from "react";

export default function ThemeToggler({ classList, showText }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={classList} onClick={toggleTheme}>
      {showText && <span>{theme === "light" ? "تم تاریک" : "تم روشن"}</span>}
      <svg
        className="size-6 2xl:size-8 stroke-orange-300 cursor-pointer"
        id="theme-toggle-pc"
      >
        <use href={theme === "light" ? "#moon" : "#sun"} />
      </svg>
    </div>
  );
}
