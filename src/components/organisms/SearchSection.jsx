import React from "react";
import Button from "../atoms/Button";
import CityButton from "../atoms/CityButton";
import Input from "../atoms/Input";

function SearchSection() {
  const city = ["Paris", "Bordeaux", "Nante", "Lille", "Lyon"];
  return (
    <div className="bg-purple-600 w-full p-10">
      <div>
        <h2>Trouve le prochain évènement dans ta ville</h2>
        <form action="" className="mt-5">
          <Input style="rounded-l-md rounded-r-none w-1/4 m-3" />
          <Button title="Chercher" style="rounded rounded-l-none h-auto" />
        </form>
        <div className="flex m-auto p-5 justify-center ">
          <ul className="flex items-center">
            {city.map((city) => {
              return <CityButton title={city} />;
            })}
          </ul>
          <Button title="Filtrer" />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
