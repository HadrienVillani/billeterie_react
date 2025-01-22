import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./assets/data/data.js";
function App() {
  const [count, setCount] = useState(0);
  console.log(data);

  return (
    <>
      <h2>Tout les évènements</h2>
      <div>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {data.map((event) => {
            return (
              <li
                style={{
                  padding: "20px",
                  border: "3px solid white",
                  listStyle: "none",
                  width: "40%",
                  margin: "10px",
                }}
              >
                <h5>Date : {event.date}</h5>
                <h3>{event.title}</h3>
                <h4>Organisateur : {event.organizer}</h4>
                <p>{event.description}</p>
                <p>Lieu : {event.location}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
