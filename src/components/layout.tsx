import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Layout() {
  return (
    <div className="bg-black">
      <header className="w-full ">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
