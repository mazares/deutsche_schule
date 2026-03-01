import NavBar from "./NavBar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border flex flex-col w-full justify-between">
      <ThemeToggle />
      <h1>header</h1>
      <NavBar />
    </header>
  );
}
