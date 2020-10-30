import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewPerson(props) {

  const [person, setPerson] = useState(props.nextPerson);

  const savePerson = event => {
    if (person.name === "") {
      return;
    }
    props.addPerson(person);
    event.preventDefault();
  };

  useEffect(() => setPerson({ ...props.nextPerson }), [props.nextPerson]);

  const onChange = event => {
    const value = event.target.value;
    person.name = value;
    setPerson({ ...person });
  };
  const title = person.id === "" ? "Create new Person" : "Edit Person"
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={person.name} onChange={onChange} />
        <br/><br/>
        <button onClick={savePerson} className="btn btn-info">Save</button>
      </form>
      {person.id !== "" && <p>Editing person with</p>}
    </div>
  );
}
export default NewPerson;

NewPerson.propTypes = {
  nextPerson: PropTypes.object,
  addPerson: PropTypes.func
}