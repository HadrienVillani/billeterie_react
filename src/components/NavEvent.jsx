import React from "react";
import { NavLink } from "react-router-dom";
function NavEvent() {
  return (
    <>
      <nav className="w-full flex justify-between top-0 border-b-4 border-white">
        <h2 className="p-5">Navbar évènement</h2>
        <ul className="flex">
          <li className="p-5">
            <NavLink to={"events"}>Tout les évènements</NavLink>
          </li>
          <li className="p-5">
            <NavLink to={"editEvent"}>Modifier un évènement</NavLink>
          </li>
          <li className="p-5">
            <NavLink to={"createEvent"}>Nouvel Évènement</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavEvent;
