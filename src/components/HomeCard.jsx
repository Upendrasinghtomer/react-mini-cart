import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../utils/constants";

function HomeCard({ category, className }) {
  return (
    <section
      className={`myshadow curved xs:px-2 xs:w-full lg:w-4/5 my-8 mx-auto flex justify-between items-center ${className}`}
    >
      <div className="">
        <img
          height={500}
          width={800}
          src={category.imageUrl}
          className="h-56 p-2 object-contain"
          alt={category.namE + " image"}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <b className=" mb-2">{category.name}</b>
        <span className="mb-2 xs:text-sm md:text-base text-black font-semibold">
          {category.description}
        </span>
        <Link
          to={ROUTE_PATH.PRODUCTS}
          className="bg-pink-600 p-2 text-white xs:text-sm font-semibold"
        >
          {" "}
          Explore {category.name}
        </Link>
      </div>
    </section>
  );
}

export default HomeCard;
