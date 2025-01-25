import "./App.css";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/frontView/Home";
import BackOffice from "./pages/BackOffice";
import CreateEvent from "./pages/BackOffice/Events/CreateEvent";
import EditEvent from "./pages/BackOffice/Events/EditEvent";
import Allevent from "./pages/BackOffice/Events/Allevent";
import HomeBO from "./pages/BackOffice/HomeBO";
import AllProducts from "./pages/BackOffice/Products/AllProducts";
import CreateProduct from "./pages/BackOffice/Products/CreateProduct";
import EditProduct from "./pages/BackOffice/Products/EditProduct";
import AllUsers from "./pages/BackOffice/Users/AllUsers";
import CreateUser from "./pages/BackOffice/Users/CreateUser";
import EditUser from "./pages/BackOffice/Users/EditUser";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="backOffice" element={<BackOffice />}>
          <Route index element={<HomeBO />} />
          <Route path="allEvents" element={<Allevent />} />
          <Route path="createEvent" element={<CreateEvent />} />
          <Route path="editEvent" element={<EditEvent />} />
          <Route path="allProducts" element={<AllProducts />} />
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="editProduct" element={<EditProduct />} />
          <Route path="allUsers" element={<AllUsers />} />
          <Route path="createUser" element={<CreateUser />} />
          <Route path="editUser" element={<EditUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
