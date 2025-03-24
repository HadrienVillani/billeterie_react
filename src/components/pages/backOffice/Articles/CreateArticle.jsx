import React from "react";
import BackOfficeForm from "../../../organisms/BackOfficeForm";
import dataForm from "../../../../assets/data/dataForm";
function CreateArticle() {
  return (
    <section>
      <h2>Créer un article</h2>
      <BackOfficeForm data={dataForm.article} />
    </section>
  );
}

export default CreateArticle;
