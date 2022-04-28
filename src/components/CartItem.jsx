export default function CartItem({ item, increment, decrement }) {
  return (
    <article className="flex justify-start bg-white py-2 mb-1">
      <div className="py-2 px-3">
        <img src={item.imageURL} className="h-14" alt={item.imageURL + " image"} />
      </div>
      <div className="flex flex-col justify-evenly items-start w-full">
        <div className="flex mb-2">
          <span
            aria-label="item name"
            className="font-semibold lg:w-80 overflow-hidden text-ellipsis"
          >
            {item.name}
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="">
            <button
              onClick={() => decrement(item)}
              className="bg-pink-600 rounded-full h-7 w-7 font-semibold text-xl text-white"
            >
              <span aria-label="decrement ">-</span>
            </button>
            <span className=" font-semibold mx-3"> {item.quantity} </span>
            <button
              onClick={() => increment(item)}
              className="bg-pink-600 rounded-full h-7 w-7 font-semibold text-xl text-white"
            >
              <span aria-label="increment">+</span>
            </button>
            <span aria-label="times" className=" mx-3">
              {" "}
              X{" "}
            </span>
            <span aria-label="item price" className="mx-3">
              {" "}
              {item.price}{" "}
            </span>
          </div>
          <div className="mr-4">
            <span aria-label="total price">Rs {item.quantity * item.price}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
