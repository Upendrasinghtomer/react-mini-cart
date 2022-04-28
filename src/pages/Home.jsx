import { useEffect } from "react";
import Carousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../redux/features/base";
import { getCategories } from "../redux/features/categories";
import { HomeCard } from "../components";

let first = true;
function Home() {
  const dispatch = useDispatch();
  const base = useSelector((state) => state.base);
  const cats = useSelector((state) => state.categories);

  useEffect(() => {
    if (first) {
      dispatch(getBanners());
      dispatch(getCategories());
      first = false;
    }
  }, []);

  return (
    <>
      <Carousel images={base.banners} />
      {cats.categories.map(
        (x, i) =>
          x.imageUrl && (
            <HomeCard key={x.id} className={i % 2 === 0 ? "" : "flex-row-reverse"} category={x} />
          )
      )}
    </>
  );
}

export default Home;
