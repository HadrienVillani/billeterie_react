import React from "react";
import data from "../../../assets/data/data";
import SearchSection from "@/components/organisms/SearchSection";

function EventsPage() {
  return (
    <>
      <SearchSection />
      <section>
        <h2>Tout les évènements</h2>
        <div>
          <ul
            className="justify-center"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {data.map((event) => {
              return (
                <li
                  style={{
                    padding: "20px",
                    border: "3px solid white",
                    listStyle: "none",
                    width: "25%",
                    margin: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <h5>Date : {event.date}</h5>
                  <h3>{event.title}</h3>
                  <h4>Organisateur : {event.organizer}</h4>
                  <p>{event.description}</p>
                  <p>Lieu : {event.location}</p>
                  <button>Réserver</button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default EventsPage;
