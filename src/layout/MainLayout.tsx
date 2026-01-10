import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen p-6">
      <nav className="mb-6 flex gap-4">
        <NavLink to="/">Hjem</NavLink>
        <NavLink to="/tjenester">Tjenester</NavLink>
        <NavLink to="/om">Om oss</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </nav>
      
      <Outlet />
    </div>
  );
}
