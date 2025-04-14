import React, { useState } from "react";

function CityButton(city) {
  const [background, setBackground] = useState(false);
  function test() {
    !background ? setBackground(true) : setBackground(false);
  }
  console.log(background);

  return (
    <li
      onClick={test}
      className={`text-xs py-3 px-5 border-3 border-amber-600 rounded mx-3 uppercase duration-350 font-black hover:scale-105 cursor-pointer ${
        background ? "bg-amber-600" : "bg-transparent"
      }`}
    >
      {city.title}
    </li>
  );
}

export default CityButton;
