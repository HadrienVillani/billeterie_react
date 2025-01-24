import React from "react";
import { Outlet } from "react-router-dom";
import NavBackOffice from "../../components/NavBackOffice";
function index() {
  return (
    <>
      <section>
        <div className="container">
          <NavBackOffice />
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default index;
