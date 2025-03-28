import React from "react";
import data from "@/assets/data/data";
import { Link } from "react-router-dom";
import EventsItems from "@/components/molecules/EventsItems";
function Allevent() {
  return (
    <div className="w-full pt-10">
      <h2>Tout les évènements</h2>
      <div className=" flex justify-center mt-10">
        <div className="flex flex-wrap w-3/4 justify-between">
          <ul className="flex flex-wrap">
            {data.map((event) => {
              return <EventsItems event={event} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Allevent;
