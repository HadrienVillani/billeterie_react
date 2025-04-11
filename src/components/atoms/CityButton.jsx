import React from "react";

function CityButton(city) {
  return (
    <li className="text-xs py-3 px-5 border-3 border-amber-600 rounded mx-3 uppercase font-black hover:bg-amber-600 cursor-pointer">
      {city.title}
    </li>
  );
}

export default CityButton;
