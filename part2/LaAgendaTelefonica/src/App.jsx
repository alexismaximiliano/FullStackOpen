/* eslint-disable react/prop-types */
import { useState } from "react";
// import Lista from "./components/Lista";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`);
      setNewName("");
    } else {
      const personsObject = {
        id:persons.length,
        name: newName,
        Number: newNumber,
      };
      setPersons(persons.concat(personsObject));
      setNewName("");
      setNewNumber("");
      console.log(persons);
    }
  };
  const nuevoNombre = (event) => {
    setNewName(event.target.value);
  };
  const nuevoNumero = (event) => {
    setNewNumber(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={nuevoNombre} />
        </div>
        <div>
          Number:
          <input type="number" value={newNumber} onChange={nuevoNumero} />{" "}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* <ul>
        {persons.map((persons) => (
          <Lista key={persons.id} name={persons} numero={persons} />
        ))}
      </ul> */}
      <ul>{persons.map(person=>(
        <li key={person.id}>{person.name}: {person.Number} </li>
      ) )} </ul>
      <div>
        debug: {newName} {newNumber}{" "}
      </div>
    </div>
  );
};

export default App;
