import { Link } from "@tanstack/react-router";

export default function NavBar() {
  const activeProps = { className: "active" };

  return (
    <nav className="flex space-x-4">
      <ul className="flex flex-col absolute gap-2">
        <li>
          <Link to="/" activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeProps={activeProps}>
            About
          </Link>
        </li>
        <li>
          <Link to="/courses" activeProps={activeProps}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="/prices" activeProps={activeProps}>
            Prices
          </Link>
        </li>
        <li>
          <Link to="/contact" activeProps={activeProps}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
