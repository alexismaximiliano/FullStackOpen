/* eslint-disable react/prop-types */
import { useState } from "react";
const Note = ({ nombre }) => {
  return <li>{nombre}</li>;
};
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    setPersons(persons.concat(newName));
    setNewName("");
  };
  const nuevoNombre = (event) => {
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={nuevoNombre} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((nombre) => (
          <Note key={nombre} nombre={nombre} />
        ))}
      </ul>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
