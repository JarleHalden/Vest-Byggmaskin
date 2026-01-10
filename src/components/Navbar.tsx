import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / navn */}
        <div className="font-semibold">
          Vest Byggmaskin
        </div>

        {/* Lenker */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : ""
            }
          >
            Hjem
          </NavLink>

          <NavLink
            to="/tjenester"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : ""
            }
          >
            Tjenester
          </NavLink>

          <NavLink
            to="/kontakt"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : ""
            }
          >
            Kontakt
          </NavLink>

          {/* Ringe-knapp (dummy) */}
          <a
            href="tel:00000000"
            className="rounded border px-3 py-1"
          >
            Ring oss
          </a>
        </div>
      </div>
    </nav>
  );
}
