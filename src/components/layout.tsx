// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
