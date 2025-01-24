import "./App.css";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/frontView/Home";
import BackOffice from "./pages/BackOffice";
import Events from "./pages/BackOffice/Events";
import CreateEvent from "./pages/BackOffice/Events/CreateEvent";
import EditEvent from "./pages/BackOffice/Events/EditEvent";
import Allevent from "./pages/BackOffice/Events/Allevent";
import HomeBO from "./pages/BackOffice/HomeBO";
import AllProducts from "./pages/BackOffice/Products/AllProducts";
import CreateProduct from "./pages/BackOffice/Products/CreateProduct";
import EditProduct from "./pages/BackOffice/Products/EditProduct";
import Products from "./pages/BackOffice/Products";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="backOffice" element={<BackOffice />}>
          <Route index element={<HomeBO />} />
          <Route path="events" element={<Events />}>
            <Route index element={<Allevent />} />
            <Route path="createEvent" element={<CreateEvent />} />
            <Route path="editEvent" element={<EditEvent />} />
          </Route>
          <Route path="products" element={<Products />}>
            <Route index element={<AllProducts />} />
            <Route path="createProduct" element={<CreateProduct />} />
            <Route path="editProduct" element={<EditProduct />} />
          </Route>
        </Route>
        <Route path="backOffice" element={<BackOffice />}></Route>
      </Routes>
    </>
  );
}

export default App;
