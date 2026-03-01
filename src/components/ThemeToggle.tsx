import { useThemeStore } from "../store/themeStore";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      type="button"
      onClick={() => toggleTheme()}
      className="flex self-end px-4 py-2 border rounded-4xl items-center justify-center"
    >
      {theme}
    </button>
  );
}
