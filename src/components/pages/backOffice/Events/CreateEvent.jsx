import BackOfficeForm from "@/components/organisms/BackOfficeForm";
import React from "react";
import dataForm from "@data/dataForm";
function CreateEvent() {
  return (
    <section>
      <h2>Créer un nouvel évènement</h2>
      <BackOfficeForm data={dataForm.event} />
    </section>
  );
}

export default CreateEvent;
