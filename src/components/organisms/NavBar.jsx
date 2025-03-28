import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="w-full flex justify-between top-0  border-white bg-amber-600">
        <Link to="/">
          <h2 className="p-5">Logo</h2>
        </Link>
        <ul className="flex items-center">
          <li className="p-5">
            <NavLink to={"/backOffice"}>Backoffice</NavLink>
          </li>
          <li className="p-5">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="p-5">
            <NavLink to={"/nos-évènements"}>Nos évènements</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
