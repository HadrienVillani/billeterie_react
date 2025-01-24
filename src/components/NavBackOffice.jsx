import React from "react";
import { NavLink } from "react-router-dom";

function NavBackOffice() {
  return (
    <>
      <nav className="w-full flex justify-between top-0 border-b-4 border-white">
        <h2 className="p-5">La navBar de backOffice</h2>
        <ul className="flex">
          <li className="p-5">
            <NavLink to={"/backOffice"}>BackOffice</NavLink>
          </li>
          <li className="p-5">
            <NavLink to={"/backOffice/events"}>Les évènements</NavLink>
          </li>
          <li className="p-5">
            <NavLink to={"/backOffice/products"}>Les Produits</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBackOffice;
