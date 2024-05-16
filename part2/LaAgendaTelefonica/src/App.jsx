import { useState } from "react";
import Persona from "./components/Persona";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber,setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    function obtenerNombres(array){
      return array.map(persons=>persons.name)
    }
    let nombres=obtenerNombres(persons)
  
    
     if (nombres.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
     }
     else{
       setPersons(persons.concat(personObject));
       setNewName("");
       setNewNumber("")
     }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value)
  }
  const personToShow = showAll
    ? persons
    : persons.filter((persona) => persona.important === true);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input type="number" value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personToShow.map((persona) => (
          <Persona key={persona.id} persona={persona} />
        ))}
      </ul>
      <div>debug: {newName}{newNumber}</div>
    </div>
  );
};

export default App;
