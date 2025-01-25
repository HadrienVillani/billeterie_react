import React from "react";
import { Outlet } from "react-router-dom";
import NavBackOffice from "../../components/NavBackOffice";
function index() {
  return (
    <>
      <div class="w-screen">
        <div className="container" class="flex justify-between w-full">
          <NavBackOffice />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default index;
