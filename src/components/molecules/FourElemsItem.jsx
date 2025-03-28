import React from "react";
import { Link } from "react-router-dom";
function FourElemsItem({ eventData }) {
  return (
    <Link
      to={`all-events/${eventData.id}`}
      className="w-1/5 p-5 border-amber-600 border-3 m-1 "
    >
      <li className="">
        <h3>{eventData.title}</h3>
      </li>
    </Link>
  );
}

export default FourElemsItem;
