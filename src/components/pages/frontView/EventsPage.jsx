import React from "react";
import data from "../../../assets/data/data";
import SearchSection from "@/components/organisms/SearchSection";
import EventsItems from "@/components/molecules/EventsItems";

function EventsPage() {
  return (
    <>
      <SearchSection />
      <section>
        <h2>Tout les évènements</h2>
        <div>
          <ul style={{ display: "flex", flexWrap: "wrap" }}>
            {data.map((event, key) => {
              return <EventsItems key={key} event={event} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default EventsPage;
