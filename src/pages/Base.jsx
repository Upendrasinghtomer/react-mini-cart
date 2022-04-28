import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

function Base() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Base;
