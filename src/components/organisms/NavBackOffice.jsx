import React from "react";
import NavItem from "@atoms/NavItem";
import { Link, NavLink } from "react-router-dom";
import dataNavButtons from "@data/navButtons";
function NavBackOffice() {
  return (
    <>
      <nav
        className="w-full flex flex-col justify-between border-r-2 border-white bg-neutral-500 h-full"
        style={{ width: "20%" }}
      >
        <ul className="flex flex-col">
          <li className="flex items-center text-white p-5 w-full">
            <NavLink to={"/backOffice"} className="w-full">
              <button className="button w-full p-5 bg-neutral-700 hover:bg-neutral-600 text-white rounded-sm">
                BackOffice
              </button>
            </NavLink>
          </li>
          {dataNavButtons.navButtons.map((button, key) => {
            return <NavItem key={key} data={button} />;
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBackOffice;
