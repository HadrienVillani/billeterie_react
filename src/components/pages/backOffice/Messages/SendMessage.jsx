import React from "react";
import BackOfficeForm from "../../../organisms/BackOfficeForm";
import dataForm from "../../../../assets/data/dataForm";

function SendMessage() {
  return (
    <section>
      <h2>Envoyer un message</h2>
      <BackOfficeForm data={dataForm.message} />
    </section>
  );
}

export default SendMessage;
