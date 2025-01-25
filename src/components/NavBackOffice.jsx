import React from "react";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
function NavBackOffice() {
  const events = {
    title: "Les évènements",
    subButtons: [
      {
        name: "Tout les évènements",
        url: "all-events",
      },
      {
        name: "Créer un évènement",
        url: "create-event",
      },
    ],
  };
  const products = {
    title: "Les produits",
    subButtons: [
      {
        name: "Tout les produits",
        url: "all-products",
      },
      {
        name: "Créer un produit",
        url: "create-product",
      },
    ],
  };
  const users = {
    title: "Les Utilisateurs",
    subButtons: [
      {
        name: "Tout les utilisateurs",
        url: "all-users",
      },
      {
        name: "Créer un utilisateur",
        url: "create-user",
      },
    ],
  };

  const article = {
    title: "Les Articles",
    subButtons: [
      {
        name: "Tout les articles",
        url: "all-articles",
      },
      {
        name: "Créer un article",
        url: "create-article",
      },
    ],
  };

  return (
    <>
      <nav
        className="w-full flex flex-col justify-between border-r-2 border-white"
        style={{ width: "20%" }}
      >
        <ul className="flex flex-col">
          <li className="flex items-center text-white p-5 w-full">
            <NavLink to={"/backOffice"} className="w-full">
              <button className="button w-full">BackOffice</button>
            </NavLink>
          </li>
          <NavItem data={events} />
          <NavItem data={products} />
          <NavItem data={users} />
          <NavItem data={article} />
        </ul>
      </nav>
    </>
  );
}

export default NavBackOffice;
