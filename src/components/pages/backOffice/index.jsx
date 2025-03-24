import React from "react";
import { Outlet } from "react-router-dom";
import NavBackOffice from "@organisms/NavBackOffice";
function index() {
  return (
    <>
      <div class="w-screen h-full">
        <div className="h-full flex">
          <NavBackOffice />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default index;
