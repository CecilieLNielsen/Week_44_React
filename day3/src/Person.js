import React, { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PersonList from "./PersonList"
import NewPerson from "./NewPerson"
import { v1 as uuid } from "uuid";

function Person() {
  const initialData = [
    { id: uuid(), name: "Hanne" },
    { id: uuid(), name: "Sanne" },
    { id: uuid(), name: "Søren" }
  ]
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });

  const addPerson = person => {
    if (person.id === "") {
      person.id = uuid();
      persons.push(person);
    } else {
      let personToEdit = persons.find(p => p.id === person.id);
      personToEdit.name = person.name;
    }
    setPersons([...persons]);
    setNewPerson({ id: "", name: "" })
  };

  const deletePerson = id => {
    persons.pop(persons.find(person => person.id === id));
    setPersons([...persons]);
  };

  const editPerson = id => {
    setNewPerson(persons.find(person => person.id === id));
  };


  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>
        Persons
      </h2>
      <div className="row">
        <div className="col-6 allPersons">
          <PersonList persons={persons} deletePerson={deletePerson} editPerson={editPerson} />
        </div>
        <div className="col-5 new-person">
          <NewPerson addPerson={addPerson} nextPerson={newPerson} />
        </div>
      </div>
    </div>
  );
}
export default Person;