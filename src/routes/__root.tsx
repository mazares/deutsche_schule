import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import { useThemeStore } from "../store/themeStore";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { theme } = useThemeStore();

  return (
    <main
      className={`flex flex-col h-screen ${theme} items-center justify-between`}
    >
      <Header />
      <Outlet />
    </main>
  );
}
