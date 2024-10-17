// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
