import React from "react";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

function EventsItems({ event }) {
  return (
    <li className="border-3 border-amber-600 m-5 p-5 w-2/7">
      <h5>Date : {event.date}</h5>
      <h3>{event.title}</h3>
      <h4>Organisateur : {event.organizer}</h4>
      <p>{event.description}</p>
      <p>Lieu : {event.location}</p>
      <Link to={`${event.id}`}>
        <Button title="réserver" />
      </Link>
    </li>
  );
}

export default EventsItems;
