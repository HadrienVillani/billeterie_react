import React from "react";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
function NavBackOffice() {
  const events = {
    title: "Les évènements",
    subButtons: [
      {
        name: "Tout les évènements",
        url: "allEvents",
      },
      {
        name: "Créer un évènement",
        url: "createEvent",
      },
    ],
  };
  const products = {
    title: "Les produits",
    subButtons: [
      {
        name: "Tout les produits",
        url: "allProducts",
      },
      {
        name: "Créer un produit",
        url: "createProduct",
      },
    ],
  };
  const users = {
    title: "Les Utilisateurs",
    subButtons: [
      {
        name: "Tout les utilisateurs",
        url: "allUsers",
      },
      {
        name: "Créer un utilisateur",
        url: "createUser",
      },
    ],
  };

  return (
    <>
      <nav
        class="w-full flex flex-col justify-between border-r-2 border-white "
        style={{ width: "20%" }}
      >
        <h2 className="p-5">La navBar de backOffice</h2>
        <ul className="flex flex-col">
          <li className="flex items-center text-white p-5">
            <NavLink to={"/backOffice"}>
              <button className="button">BackOffice</button>
            </NavLink>
          </li>
          <NavItem data={events} />
          <NavItem data={products} />
          <NavItem data={users} />
        </ul>
      </nav>
    </>
  );
}

export default NavBackOffice;
