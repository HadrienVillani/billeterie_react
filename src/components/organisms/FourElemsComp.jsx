import React, { useEffect, useState } from "react";
import EventItem from "../molecules/FourElemsItem";
import FourElemsItem from "../molecules/FourElemsItem";
function FourElemsComp({ data, title }) {
  const fourElem = [];

  for (let i = 0; i < 4; i++) {
    fourElem.push(data[i]);
  }

  return (
    <section>
      <h2>{title}</h2>
      <div>
        <ul className="flex flex-wrap justify-between mt-5">
          {fourElem.map((element, key) => {
            return <FourElemsItem key={key} eventData={element} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default FourElemsComp;
