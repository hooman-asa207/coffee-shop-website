export default function ThemeToggler({
  classList,
  showText,
  theme,
  toggleTheme,
}) {
  

  const themeText = theme === "light" ? "تم تاریک" : "تم روشن";

  return (
    <div
      className={classList}
      onClick={() => {
        toggleTheme();
      }}
    >
      {showText && <span>{themeText}</span>}
      <svg
        className="size-6 2xl:size-8 stroke-orange-300 cursor-pointer"
        id="theme-toggle-pc"
      >
        <use href={theme === "light" ? "#moon" : "#sun"} />
      </svg>
    </div>
  );
}
