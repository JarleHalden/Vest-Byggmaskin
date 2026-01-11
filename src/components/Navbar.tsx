import { NavLink } from "react-router-dom";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ 
        height: "72px",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#E5E7EB"
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-full">
          {/* Logo / navn */}
          <div className="font-semibold text-base" style={{ fontWeight: 600 }}>
            Vest Byggmaskin
          </div>

          {/* Lenker */}
          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors hover:underline hover:text-[#FEAB24] ${
                  isActive ? "underline text-[#FEAB24]" : "text-[#0F172A]"
                }`
              }
              style={{ fontSize: "16px", fontWeight: 500 }}
            >
              Hjem
            </NavLink>

            <NavLink
              to="/tjenester"
              className={({ isActive }) =>
                `transition-colors hover:underline hover:text-[#FEAB24] ${
                  isActive ? "underline text-[#FEAB24]" : "text-[#0F172A]"
                }`
              }
              style={{ fontSize: "16px", fontWeight: 500 }}
            >
              Tjenester
            </NavLink>

            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                `transition-colors hover:underline hover:text-[#FEAB24] ${
                  isActive ? "underline text-[#FEAB24]" : "text-[#0F172A]"
                }`
              }
              style={{ fontSize: "16px", fontWeight: 500 }}
            >
              Kontakt
            </NavLink>
          </div>
        </div>
      </Container>
    </nav>
  );
}
