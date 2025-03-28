import React from "react";
import Button from "../atoms/Button";

function ProductItem({ product }) {
  return (
    <div className="border-3 border-amber-600 m-5 p-5 w-2/7">
      <h4>{product.categorie}</h4>
      <h3>{product.title}</h3>
      <p>{product.prix} €</p>
      <Button title="ajouter au panier" />
    </div>
  );
}

export default ProductItem;
