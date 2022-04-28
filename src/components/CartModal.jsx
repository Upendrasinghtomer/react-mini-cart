import { FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart, removeProductFromCart, toggleCart } from "../redux/features/cart";
import { ROUTE_PATH } from "../utils/constants";
import { CartItem } from "./";

export default function Modal({ showModal, closeModal, cart }) {
  const dispatch = useDispatch();

  const increment = (p) => {
    dispatch(addProductToCart(p));
  };
  const decrement = (p) => {
    dispatch(removeProductFromCart(p));
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-end items-end flex overflow-x-hidden overflow-y-auto fixed lg:right-16 bottom-0 z-50 outline-none focus:outline-none">
            <div className="relative  w-full">
              <div className="border-0 shadow-lg relative flex flex-col lg:w-full xs:w-screen xs:h-screen lg:h-full bg-gray-200 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-4 bg-black text-white">
                  <h3 className="text-xxl font-semibold">
                    My Cart ( {cart.items.length} {cart.items.length === 1 ? "item " : "items "})
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white float-right outline-none focus:outline-none"
                    onClick={() => closeModal()}
                    style={{ lineHeight: "0.1" }}
                  >
                    <span
                      aria-label="close cart"
                      className="bg-transparent text-white h-6 w-6 font-light text-5xl block outline-none focus:outline-none"
                      style={{ lineHeight: "0" }}
                    >
                      ×
                    </span>
                  </button>
                </div>
                {cart.items.length === 0 && (
                  <div className="flex flex-col items-center justify-end lg:w-80 h-full p-3 shadow-sm bg-white">
                    <div className="py-2 flex flex-col justify-center items-center h-96">
                      <h3 className="text-xl font-semibold">No items in your cart</h3>
                      <p>Your favourite items just a click away</p>
                    </div>
                    <Link
                      to={ROUTE_PATH.PRODUCTS}
                      className="bg-pink-600 w-full text-white active:bg-pink-600 rounded-sm mt-2 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex justify-between"
                      type="button"
                      onClick={() => closeModal()}
                    >
                      <span aria-label="start shopping">Start Shopping</span>
                    </Link>
                  </div>
                )}

                {cart.items.length >= 1 && (
                  <>
                    <div className="relative py-2 flex-auto h-96 overflow-y-auto">
                      {cart.items.map((x) => (
                        <CartItem key={x.id} item={x} increment={increment} decrement={decrement} />
                      ))}
                      <div className="flex justify-start bg-white p-2 m-2 items-center rounded-sm">
                        <div className="py-1 px-3">
                          <img src="/static/images/lowest-price.png" className="h-8" alt="" />
                        </div>
                        <div className="flex">
                          <span>You won't find it cheaper anywhere</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 shadow-sm bg-white">
                      <span>Promo code can be applied on payment page</span>
                      <button
                        className="bg-pink-600 w-full  text-white active:bg-emerald-600 rounded-sm mt-2 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex justify-between"
                        type="button"
                        onClick={() => closeModal()}
                      >
                        <span aria-label="checkout">Proceed to checkout</span>
                        <span>
                          Rs {cart.totalPrice} <FaAngleRight className="inline mb-1" />
                        </span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
