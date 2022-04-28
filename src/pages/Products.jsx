import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/products";
import { getCategories } from "../redux/features/categories";
import { ProductItem } from "../components";
import { addProductToCart } from "../redux/features/cart";

let first = true;

function Products() {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const [products, setProducts] = useState(prod.products);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    if (selectedCategoryId) {
      let newProducts = prod.products.filter((x) => x.category === selectedCategoryId);
      setProducts(newProducts);
    } else {
      setProducts(prod.products);
    }
  }, [selectedCategoryId]);

  const toggleCategory = (catId) => {
    if (catId === selectedCategoryId) setSelectedCategoryId(null);
    else setSelectedCategoryId(catId);
  };

  useEffect(() => {
    if (first) {
      dispatch(getProducts());
      dispatch(getCategories());
      first = false;
    }
  }, []);

  useEffect(() => {
    setProducts(prod.products);
  }, [prod]);

  const addToCart = (p) => {
    dispatch(addProductToCart(p));
  };

  return (
    <div className="flex justify-center items-center xs:w-full lg:w-4/5 mx-auto">
      <div className=" bg-gray-200 flex justify-between">
        <div className=" xs:hidden sm:w-2/5 lg:w-3/12 2xl:w-3/12 sm:flex flex-col w-full">
          <ul className="p-3">
            {categories.categories.map((x) => (
              <li
                key={x.id}
                className={`px-2 py-2 border-b-2 border-gray-400  ${
                  x.id === selectedCategoryId ? "bg-gray-100" : ""
                }`}
              >
                <button onClick={() => toggleCategory(x.id)}>{x.name}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="xs:w-full lg:w-3/4 flex flex-wrap bg-white">
          <div className=" md:hidden flex flex-col xs:w-full">
            <select
              onChange={(e) => toggleCategory(e.target.value)}
              className="p-3 outline-none border-0 bg-pink-600 my-3 text-white"
            >
              {categories.categories.map((x) => (
                <option
                  key={x.id}
                  value={x.id}
                  className="px-4 py-2 border-b-2 border-gray-400 outline-none"
                >
                  {x.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-wrap">
            {products.map((x) => (
              <ProductItem key={x.id} product={x} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
