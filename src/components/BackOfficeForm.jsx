import React from "react";
import messageFormData from "../assets/data/messageForm";
import { Input } from "@mui/material";
function BackOfficeForm() {
  console.log(messageFormData);

  const handleSubmit = () => {};
  return (
    <>
      <form action="" onClick={handleSubmit}>
        {messageFormData.allIputs.map((element, key) => {
          return (
            <div key={key}>
              <label>{element.name}</label>
              {element.type === "input" ? <input /> : <textarea />}
            </div>
          );
        })}
      </form>
    </>
  );
}

export default BackOfficeForm;
