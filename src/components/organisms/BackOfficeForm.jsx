import React from "react";
function BackOfficeForm(props) {
  const handleSubmit = () => {};
  return (
    <>
      <form
        action=""
        onClick={handleSubmit}
        className="flex flex-col w-4/5 items-center"
      >
        {props.data.allIputs.map((element, key) => {
          return (
            <div key={key} className="mb-5 flex flex-col items-start w-3/5 ">
              <label className="mr-5">{element.name}</label>
              {element.type === "input" ? (
                <input />
              ) : (
                <textarea className="w-full h-30" />
              )}
            </div>
          );
        })}
        <div className="w-full">
          <button className="button w-1/6 bg-neutral-600 rounded-sm hover:bg-neutral-700">
            Envoyer
          </button>
        </div>
      </form>
    </>
  );
}

export default BackOfficeForm;
