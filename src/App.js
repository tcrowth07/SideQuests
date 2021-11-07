import "./App.css";
import Card from "./Card.js";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();

function App() {
  const MINUTE_MS = 60000;
  useEffect(() => {
    async function GetImageofTheDay() {
      await fetch(`https://bing.biturl.top/`, { method: "GET" })
        .then((response) => {
          return response.json();
        })
        .then((results) => console.log(results));
    }
    async function GetSideQuests() {
      await fetch(
        `https://api.trello.com/1/lists/5f2470f05a21633c4e877910/cards?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_API_TOKEN}`,
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
    }
    GetImageofTheDay();
    GetSideQuests();
    //const interval = setInterval(GetSideQuests, MINUTE_MS);
    //return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  const [sideQuests, setSideQuests] = useState([]);

  return (
    <>
      <div className="Background-image"></div>
      <div className="App">
        <h2>Adventure Log</h2>
        {sideQuests.map((sideQuest, index) => {
          return (
            <Card
              key={index}
              title={sideQuest.name}
              description={sideQuest.desc}
              date={sideQuest.due}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
