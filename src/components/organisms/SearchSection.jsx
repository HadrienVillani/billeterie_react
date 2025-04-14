import React, { useState } from "react";
import Button from "../atoms/Button";
import CityButton from "../atoms/CityButton";
import Input from "../atoms/Input";

function SearchSection() {
  const [citySlected, setCitySelected] = useState("");
  const city = ["Paris", "Bordeaux", "Nante", "Lille", "Lyon"];
  console.log(citySlected);
  const test = () => {
    console.log("test");
  };

  return (
    <div className="bg-purple-600 w-full p-10 h-2/4 flex items-center justify-center">
      <div className="w-full flex">
        <div>
          <h2 className="text-left">
            Trouve le prochain évènement dans ta ville
          </h2>
          <p className="text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            alias tempora aliquam quasi labore veritatis ratione porro illum
            cumque id, quaerat sint reiciendis eum quas totam. Voluptatem illo
            quae quas.
          </p>
        </div>
        <div>
          <form action="" className="mt-5 w-full">
            <Input
              style="rounded-l-md rounded-r-none w-2/4 m-3"
              placeholder="Choisir une ville"
            />
            <Button title="Chercher" style="rounded rounded-l-none h-auto" />
          </form>
          <div className="flex m-auto p-5 justify-center ">
            <ul className="flex items-center">
              {city.map((city) => {
                return <CityButton title={city} onClick={test} />;
              })}
            </ul>
            <Button title="Filtrer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
