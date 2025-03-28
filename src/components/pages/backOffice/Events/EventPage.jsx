import React from "react";
import { useParams } from "react-router-dom";
import event from "@data/data";
function EventPage() {
  const params = useParams();
  console.log(event[params]);

  return <div>EventPage</div>;
}

export default EventPage;
