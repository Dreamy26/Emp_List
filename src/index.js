import React from "react";
import ReactDOM from "react-dom";



const people = [
  // "Dreamy",
  // "Alexa",
  // "Lish",
  // "Ducky",
  // "Troll",
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = people.filter((person) =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
