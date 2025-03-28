import React from "react";
import productsData from "@/assets/data/productsData";
import ProductItem from "@/components/molecules/ProductItem";
function AllProducts() {
  return (
    <section>
      <h2>Tout les produits</h2>
      <div className="flex flex-wrap">
        {productsData.map((product, key) => {
          return <ProductItem key={key} product={product} />;
        })}
      </div>
    </section>
  );
}

export default AllProducts;
