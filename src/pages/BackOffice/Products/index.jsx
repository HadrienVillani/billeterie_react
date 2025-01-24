import React from "react";
import { Outlet } from "react-router-dom";
import NavEvent from "../../../components/NavEvent";
import NavProduct from "../../../components/NavProduct";

function index() {
  return (
    <div>
      <NavProduct />
      <Outlet />
    </div>
  );
}

export default index;
