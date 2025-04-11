import React from "react";

function Button(props) {
  return (
    <button
      className={`border-3 border-amber-600 bg-amber-600 px-10 py-3 rounded-md hover:bg-transparent duration-500 cursor-pointer uppercase font-bold ${props.style}`}
    >
      {props.title}
    </button>
  );
}

export default Button;
