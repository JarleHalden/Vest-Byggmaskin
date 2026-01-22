import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoBlack from "../assets/logo-black.png";
import Container from "./Container";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Hjem" },
    { to: "/tjenester", label: "Tjenester" },
    { to: "/om", label: "Om oss" },
    { to: "/kontakt", label: "Kontakt" },
  ];
  const navLinkClass = (isActive: boolean) =>
    `nav-link pb-2 pointer-events-auto transition-colors hover:text-[var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]${
      isActive ? " nav-link-active" : ""
    }`;

  return (
    <nav
      className="sticky top-0 z-50 relative border-b bg-[var(--color-surface)] backdrop-blur min-h-[56px] py-2 sm:min-h-[72px] sm:py-3"
      style={{ borderBottomColor: "var(--color-border)" }}
    >
      <Container>
        <div className="relative z-10 flex w-full items-center justify-between gap-4 pointer-events-auto">
          {/* Logo / navn */}
          <NavLink
            to="/"
            className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
          >
            <img
              src={logoBlack}
              alt="Vest Bygg & Maskin AS"
              className="h-9 w-auto shrink-0"
            />
            <div className="min-w-0">
              <div className="font-semibold text-base truncate">
                Vest Bygg & Maskin AS
              </div>
            </div>
          </NavLink>

          {/* Lenker */}
          <div className="hidden md:flex items-center justify-end gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => navLinkClass(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-[var(--color-text)] transition-colors hover:bg-[var(--color-border)]/30 hover:text-[var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Meny</span>
            <span aria-hidden="true" className="flex flex-col gap-1">
              <span className="h-0.5 w-5 bg-[var(--color-text)]" />
              <span className="h-0.5 w-5 bg-[var(--color-text)]" />
              <span className="h-0.5 w-5 bg-[var(--color-text)]" />
            </span>
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-nav"
            className="md:hidden border-t mt-3 pt-3"
            style={{ borderTopColor: "var(--color-border)" }}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${navLinkClass(
                      isActive
                    )} px-2 py-2 hover:bg-[var(--color-border)]/20`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </nav>
  );
}
