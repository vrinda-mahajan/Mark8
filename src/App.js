import { useState } from "react";
import "./styles.css";
const foodDictionary = {
  "🍕": "pizza",
  "🍤": "fried prawn",
  "🍗": "polutry leg",
  "🥗": "green salad",
  "🥪": "sandwich",
  "🥞": "pancakes"
};
var emojiList = Object.keys(foodDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function handleOnChange(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji in foodDictionary) {
      setMeaning(foodDictionary[inputEmoji]);
    } else {
      setMeaning("Emoji not recognized.");
    }
  }
  function handleClick(item) {
    setMeaning(foodDictionary[item]);
  }

  return (
    <div className="App">
      <h1>Food Dictionary</h1>
      <input onChange={handleOnChange}></input>
      <h1>{meaning}</h1>
      {emojiList.map((item) => {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
            onClick={() => {
              handleClick(item);
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
