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

import EditArticle from "./pages/BackOffice/Articles/EditArticle";
import CreateArticle from "./pages/BackOffice/Articles/CreateArticle";
import AllArticles from "./pages/BackOffice/Articles/AllArticles";

import AllMessages from "./pages/BackOffice/Messages/AllMessages";
import SendMessage from "./pages/BackOffice/Messages/SendMessage";
import Message from "./pages/BackOffice/Messages/Message";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="backOffice" element={<BackOffice />}>
          <Route index element={<HomeBO />} />
          {/* ------------------------------------Events------------------------------------ */}
          <Route path="all-events" element={<Allevent />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="edit-event" element={<EditEvent />} />
          {/* ------------------------------------Products------------------------------------ */}
          <Route path="all-products" element={<AllProducts />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="edit-product" element={<EditProduct />} />
          {/* ------------------------------------Users------------------------------------ */}
          <Route path="all-users" element={<AllUsers />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="edit-user" element={<EditUser />} />
          {/* ------------------------------------Articles------------------------------------ */}
          <Route path="all-articles" element={<AllArticles />} />
          <Route path="create-article" element={<CreateArticle />} />
          <Route path="edit-article" element={<EditArticle />} />
          {/* ------------------------------------Messages------------------------------------ */}
          <Route path="all-messages" element={<AllMessages />} />
          <Route path="send-message" element={<SendMessage />} />
          <Route path="message" element={<Message />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
