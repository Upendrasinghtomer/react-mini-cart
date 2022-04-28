import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa";
import { isTouchDevice } from "../utils/utils";
import useTouch from "../hooks/useTouch.js";

export default function Carousel({ images }) {
  const totalImages = images.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = totalImages - 1;
    } else if (newIndex >= totalImages) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const next = () => updateIndex(activeIndex + 1);
  const previous = () => updateIndex(activeIndex - 1);
  const { onTouchMove, onTouchStart } = useTouch(false, previous, next);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) next();
    }, 3000);
    return () => {
      if (interval) clearInterval(interval);
    };
  });

  return (
    <section className="flex myshadow curved justify-center items-center my-3 lg:w-4/5 xs:w-full mx-auto relative flex-grow">
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="inline-flex duration-700"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((x, i) => (
            <div key={x.id} className="w-full flex-shrink-0">
              <img
                height={300}
                width={1200}
                src={x.bannerImageUrl}
                alt={x.bannerImageAlt}
                className="w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <article className="absolute right-0 -bottom-7 left-0 flex justify-center p-0">
        {images.map((x, i) => (
          <FaCircle
            key={x.id}
            type="button"
            aria-label="carousel indicator"
            onClick={() => updateIndex(i)}
            className={` mr-3 text-xs ${activeIndex === i ? "text-gray-600" : "text-gray-200"}`}
          ></FaCircle>
        ))}
      </article>
      {!isTouchDevice() && (
        <button
          aria-label="left"
          onClick={() => previous()}
          className="text-4xl text-gray-500 absolute h-full flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
        >
          <FaAngleLeft />
        </button>
      )}
      {!isTouchDevice() && (
        <button
          aria-label="right"
          onClick={() => next()}
          className="text-4xl text-gray-500 absolute h-full flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
        >
          <FaAngleRight />
        </button>
      )}
    </section>
  );
}
