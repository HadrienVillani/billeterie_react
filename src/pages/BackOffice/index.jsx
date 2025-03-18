import React from "react";
import { Outlet } from "react-router-dom";
import NavBackOffice from "../../components/NavBackOffice";
function index() {
  return (
    <>
      <div class="w-screen h-full">
        <div className="container h-full flex">
          <NavBackOffice />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default index;
