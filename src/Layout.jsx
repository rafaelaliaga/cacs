// src/Layout.jsx
import Menu    from "./components/Menu";
import Footer  from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Menu />
      <main className="flex-1">
        <Outlet />           {/* muda conforme a rota */}
      </main>
      <Footer />
    </div>
  );
}