import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="w-full flex justify-between top-0 border-b-4 border-white">
        <h2 className="p-5">Navbar principal</h2>
        <ul className="flex">
          <li className="p-5">
            <NavLink to={"/backOffice"}>Backoffice</NavLink>
          </li>
          <li className="p-5">
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
