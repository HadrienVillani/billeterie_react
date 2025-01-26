import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {
  function hideMenu(e) {
    e.target.nextSibling.classList.toggle("visible");
  }
  return (
    <li className="flex items-center justify-center">
      <div className="w-5/6 mb-5">
        <button
          className="button w-full p-5 bg-neutral-700 hover:bg-neutral-600 text-white rounded-sm"
          onClick={hideMenu}
        >
          {props.data.title}
        </button>
        <ul className="hidden">
          {props.data.subButtons.map((subButton, key) => {
            return (
              <NavLink key={key} to={`${subButton.url}`}>
                <li className="hover:bg-neutral-600">
                  <button>{subButton.name}</button>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

export default NavItem;
