export default function ProductItem({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="xs:w-full sm:w-1/2 lg:w-1/3 p-3  overflow-hidden shadow-sm flex flex-col bg-white">
      <div className="flex md:h-12 lg:h-20 xs:mb-3 overflow-hidden">
        <b>{product.name}</b>
      </div>
      <div className="flex flex-col border-b-2 border-dashed pb-2 ">
        <div className="flex lg:flex-col justify-between items-start">
          <div className="xs:w-1/2 lg:w-full p-2">
            <img
              height={300}
              width={300}
              className="w-full object-contain"
              src={product.imageURL}
              alt={product.imageURL + " image"}
            />
          </div>
          <div className="xs:w-1/2 lg:w-full h-full flex xs:flex-col justify-between">
            <div className="p-2 bg-gray-200">
              <p className="text-gray-700 text-sm text-ellipsis overflow-hidden h-24">
                {product.description}
              </p>
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                className="inline-block bg-pink-600 w-full md:hidden py-1 text-sm font-semibold text-white"
              >
                Buy Now @ MRP Rs {product.price}
              </button>
              <div className="pt-4 xs:hidden lg:flex justify-between items-center">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700">
                  MRP Rs {product.price}
                </span>
                <button
                  onClick={handleAddToCart}
                  className="inline-block bg-pink-600 px-3 py-1 text-sm font-semibold text-white"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="sm:inline-block bg-pink-600 w-full xs:hidden lg:hidden py-1 text-sm font-semibold text-white"
        >
          Buy Now @ MRP Rs {product.price}
        </button>
      </div>
    </article>
  );
}
