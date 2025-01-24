import React from "react";
import { Outlet } from "react-router-dom";
import NavEvent from "../../../components/NavEvent";

function index() {
  return (
    <div>
      <NavEvent />
      <Outlet />
    </div>
  );
}

export default index;
