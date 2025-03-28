import React from "react";

function SearchSection() {
  return (
    <div className="bg-purple-600 w-full p-10">
      <div>
        <h2>Trouve le prochain évènement dans ta ville</h2>
        <form action="">
          <input type="text" />
          <button>Chercher</button>
        </form>
      </div>
    </div>
  );
}

export default SearchSection;
