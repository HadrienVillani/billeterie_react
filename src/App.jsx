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
import EditArticle from "./pages/BackOffice/Article/EditArticle";
import CreateArticle from "./pages/BackOffice/Article/CreateArticle";
import AllArticles from "./pages/BackOffice/Article/AllArticles";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="backOffice" element={<BackOffice />}>
          <Route index element={<HomeBO />} />
          <Route path="all-events" element={<Allevent />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="edit-event" element={<EditEvent />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="edit-product" element={<EditProduct />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="edit-user" element={<EditUser />} />
          <Route path="all-articles" element={<AllArticles />} />
          <Route path="create-article" element={<CreateArticle />} />
          <Route path="edit-article" element={<EditArticle />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
