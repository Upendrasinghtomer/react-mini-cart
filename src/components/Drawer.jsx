import { Link, NavLink } from "react-router-dom";
import { ROUTE_PATH } from "../utils/constants";

export default function Drawer({ closeDrawer, isOpen }) {
  return (
    <section
      onClick={closeDrawer}
      className={
        " md:hidden fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-4/5 left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " -translate-x-0 " : " -translate-x-full ")
        }
      >
        <article className="relative w-full flex flex-col space-y-3 overflow-y-scroll h-full">
          <header className="px-4 py-2 shadow-md">
            <Link to={ROUTE_PATH.HOME} onClick={closeDrawer}>
              <img
                height={36}
                width={79}
                src="/static/images/logo.png"
                alt="Sabka Bazaar logo"
                className="h-9 py-1"
              />
              <span aria-label="welcome" className="text-gray-500 font-semibold text-sm">
                Welcome to Sabka Bazaar
              </span>
            </Link>
          </header>
          <div className=" p-2 xs:w-full mx-auto font-semibold text-gray-500">
            <ul>
              <li className=" p-2 mb-2 shadow rounded-md">
                <NavLink to={ROUTE_PATH.HOME} onClick={closeDrawer}>
                  Home
                </NavLink>
              </li>
              <li className=" p-2 mb-2 shadow rounded-md">
                <NavLink to={ROUTE_PATH.PRODUCTS} onClick={closeDrawer}>
                  Products
                </NavLink>
              </li>
              <li className=" p-2 mb-2 shadow rounded-md">
                <NavLink to={ROUTE_PATH.LOGIN} onClick={closeDrawer}>
                  SignIn
                </NavLink>
              </li>
              <li className="p-2 shadow rounded-md">
                <NavLink to={ROUTE_PATH.REGISTER} onClick={closeDrawer}>
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </section>
  );
}
