import { NavLink } from "react-router-dom";
import logoBlack from "../assets/logo-black.png";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b min-h-[56px] py-2 sm:min-h-[72px] sm:py-3"
      style={{
        backgroundColor: "var(--color-surface)",
        borderBottomColor: "var(--color-border)",
      }}
    >
      <Container>
        <div className="flex w-full items-center justify-between">
          {/* Logo / navn */}
          <div className="flex items-center gap-3">
            <img
              src={logoBlack}
              alt="Vest Byggmaskin"
              className="h-9 w-auto"
            />
            <div className="font-semibold text-base">Vest Byggmaskin</div>
          </div>

          <div className="flex-1" aria-hidden="true" />

          {/* Lenker */}
          <div className="flex items-center justify-end gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link pb-2${isActive ? " nav-link-active" : ""}`
              }
            >
              Hjem
            </NavLink>

            <NavLink
              to="/tjenester"
              className={({ isActive }) =>
                `nav-link pb-2${isActive ? " nav-link-active" : ""}`
              }
            >
              Tjenester
            </NavLink>

            <NavLink
              to="/om"
              className={({ isActive }) =>
                `nav-link pb-2${isActive ? " nav-link-active" : ""}`
              }
            >
              Om oss
            </NavLink>

            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                `nav-link pb-2${isActive ? " nav-link-active" : ""}`
              }
            >
              Kontakt
            </NavLink>

          </div>
        </div>
      </Container>
    </nav>
  );
}
