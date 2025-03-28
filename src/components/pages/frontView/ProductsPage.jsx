import React from "react";
import productsData from "@/assets/data/productsData";
import ProductItem from "@/components/molecules/ProductItem";
function ProductsPage() {
  return (
    <>
      <section>
        <h2>Tout nos produits</h2>
        <div className="flex flex-wrap justify-between mt-10">
          {productsData.map((product, key) => {
            return <ProductItem key={key} product={product} />;
          })}
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
