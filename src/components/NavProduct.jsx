import React from "react";
import { NavLink } from "react-router-dom";
function NavProduct() {
  return (
    <>
      <nav className="w-full flex justify-between top-0 border-b-4 border-white">
        <h2 className="p-5">Navbar évènement</h2>
        <ul className="flex">
          <li className="p-5">
            <NavLink to={"allProducts"}>Tout les produits</NavLink>
          </li>
          <li className="p-5">
            <NavLink to={"editProduct"}>Modifier un produit</NavLink>
          </li>
          <li className="p-5">
            <NavLink to={"createProduct"}>Nouveau produit</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavProduct;
