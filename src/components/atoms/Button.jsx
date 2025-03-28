import React from "react";

function Button({ title }) {
  return (
    <button className="bg-amber-600 px-10 py-2 rounded-md hover:bg-amber-500 cursor-pointer uppercase font-bold">
      {title}
    </button>
  );
}

export default Button;
