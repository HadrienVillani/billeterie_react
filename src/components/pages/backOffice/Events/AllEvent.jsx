import React from "react";
import data from "@/assets/data/data";
import { Link } from "react-router-dom";
function Allevent() {
  return (
    <div className="w-full pt-10">
      <h2>Tout les évènements</h2>
      <div className=" flex justify-center mt-10">
        <div className="flex flex-wrap w-3/4 justify-between">
          {data.map((event) => {
            return (
              <div
                key={event.id}
                className="border-amber-600 border-3 pb-5 m-2 w-1/4"
              >
                <div className="bg-amber-600 w-full p-3 mb-5">
                  <p>{event.date}</p>
                </div>
                <h3>{event.title}</h3>
                <Link to={`${event.id}`}>
                  <button>Voir l'évènement</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Allevent;
