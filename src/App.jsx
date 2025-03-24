import "./App.css";
import NavBar from "./components/organisms/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/frontView/Home";
import BackOffice from "./components/pages/backOffice";

import CreateEvent from "@pages/backOffice/Events/CreateEvent";
import EditEvent from "@pages/backOffice/Events/EditEvent";
import Allevent from "@pages/backOffice/Events/Allevent";

import HomeBO from "@pages/backOffice/HomeBO";

import AllProducts from "@pages/backOffice/Products/AllProducts";
import CreateProduct from "@pages/backOffice/Products/CreateProduct";
import EditProduct from "@pages/backOffice/Products/EditProduct";

import AllUsers from "@pages/backOffice/Users/AllUsers";
import CreateUser from "@pages/backOffice/Users/CreateUser";
import EditUser from "@pages/backOffice/Users/EditUser";

import EditArticle from "@pages/backOffice/Articles/EditArticle";
import CreateArticle from "@pages/backOffice/Articles/CreateArticle";
import AllArticles from "@pages/backOffice/Articles/AllArticles";

import AllMessages from "@pages/backOffice/Messages/AllMessages";
import SendMessage from "@pages/backOffice/Messages/SendMessage";
import Message from "@pages/backOffice/Messages/Message";

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
