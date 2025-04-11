import React from "react";

function Input(props) {
  return (
    <>
      {props.title && <label htmlFor="">{props.title}</label>}
      <input
        className={`rounded-md px-3 py-3 outline-none border-3 border-amber-600 ${props.style}`}
      />
    </>
  );
}

export default Input;
