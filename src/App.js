import { Routes, Route } from "react-router-dom";
import { ROUTE_PATH } from "./utils/constants";
import useTouch from "./hooks/useTouch";
import { Loader } from "./components";
import { lazy, Suspense, useState } from "react";

import { Alert, Drawer } from "./components";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Base = lazy(() => import("./pages/Base"));

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onOpenDrawer = () => setIsDrawerOpen(true);
  const { onTouchMove, onTouchStart } = useTouch(true, onOpenDrawer);

  return (
    <Suspense fallback={<Loader />}>
      <main onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
        <Alert />
        <Drawer closeDrawer={() => setIsDrawerOpen(false)} isOpen={isDrawerOpen} />
        <Routes>
          <Route path={ROUTE_PATH.Home} element={<Base />}>
            <Route index element={<Home />} />
            <Route path={ROUTE_PATH.PRODUCTS} element={<Products />} />
            <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
            <Route path={ROUTE_PATH.REGISTER} element={<Register />} />
          </Route>
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;
