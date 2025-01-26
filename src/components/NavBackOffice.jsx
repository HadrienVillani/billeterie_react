import React from "react";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
function NavBackOffice() {
  const navButtons = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      title: "Messages",
      subButtons: [
        {
          name: "Tout les messages",
          url: "all-Messages",
        },
        {
          name: "Envoyer un message",
          url: "send-message",
        },
      ],
    },
  ];

  return (
    <>
      <nav
        className="w-full flex flex-col justify-between border-r-2 border-white bg-neutral-500"
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
          {navButtons.map((button, key) => {
            return <NavItem key={key} data={button} />;
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBackOffice;
