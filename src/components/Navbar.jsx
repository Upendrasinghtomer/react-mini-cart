import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { ROUTE_PATH } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { CartModal } from "./";
import { toggleCart } from "../redux/features/cart";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const toggleCartModal = () => {
    dispatch(toggleCart());
  };
  return (
    <>
      <nav className="relative flex justify-center shadow-md shadow-gray-200 px-0">
        <div className="xs:w-full lg:w-4/5 mx-auto px-1 flex flex-wrap items-center justify-end">
          <div className="xs:hidden md:flex ">
            <NavLink className="px-2" to={ROUTE_PATH.LOGIN}>
              SignIn{" "}
            </NavLink>
            <NavLink className="px-2" to={ROUTE_PATH.REGISTER}>
              Register{" "}
            </NavLink>
          </div>
          <div className="w-full xs:p-0 md:px-4 sm: flex flex-wrap items-center justify-between">
            <div className=" relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link className="inline-block mr-5" to={ROUTE_PATH.HOME}>
                <img
                  src="/static/images/logo.png"
                  height={48}
                  width={106}
                  className="h-12"
                  alt="sabka bazaar logo"
                />
              </Link>

              <ul className="inline-flex xs:hidden md:inline-flex list-none lg:ml-auto font-bold text-gray-500 py-2">
                <li className="nav-item">
                  <NavLink className="px-3 flex items-center leading-snug " to={ROUTE_PATH.HOME}>
                    <span aria-label="home" className="ml-2">
                      {" "}
                      Home
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="px-3 flex items-center leading-snug "
                    to={ROUTE_PATH.PRODUCTS}
                  >
                    <span aria-label="products" className="ml-2">
                      {" "}
                      Products
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-row items-center" id="example-navbar-danger">
              <ul className="flex flex-col items-end  lg:flex-row list-none lg:ml-auto">
                <li className="nav-item bg-gray-200 p-1">
                  <button
                    onClick={toggleCartModal}
                    className="px-3 py-2 flex items-center font-semibold leading-snug "
                    href="#cart"
                  >
                    <FaShoppingCart className="text-pink-500 text-xl leading-xl" />
                    <span aria-label="my cart" className="ml-2">
                      {" "}
                      {cart.items.length} {cart.items.length === 1 ? "item " : "items "}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <CartModal showModal={cart.showCart} closeModal={toggleCartModal} cart={cart} />
    </>
  );
}

export default Navbar;
