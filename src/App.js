import "./App.css";
import Card from "./Card.js";
import { useEffect, useState } from "react";

function App() {
  useEffect(async () => {
    await fetch(
      "https://api.trello.com/1/lists/5f2470f05a21633c4e877910/cards?key=dbb02a08af7d81a4ae178d911ecaac86&token=dba072c82d36c491f720a8620d735c4f46b6c29c5ea8398478aa564d116426c4",
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((results) =>
        setSideQuests(
          results.sort(function (a, b) {
            var dateA = new Date(a.due),
              dateB = new Date(b.due);
            return dateA - dateB;
          })
        )
      )
      .catch((err) => console.error(err));
  }, []);

  const [sideQuests, setSideQuests] = useState([]);

  return (
      <div className="App-header">
        <h1 style={{color:"white"}}>Side Quests</h1>
        {sideQuests.map((sideQuest, index) => {
          return (
            <Card key={index} title={sideQuest.name} date={sideQuest.due} />
          );
        })}
      </div>
  );
}

export default App;
