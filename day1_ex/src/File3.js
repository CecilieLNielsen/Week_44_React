import React, { Component } from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function WelcomePerson(props) {
    return <h5>{props.person.firstName}, {props.person.lastName}, {props.person.email}</h5>;
  }
  
  function MultiWelcome(props) {
    return (
      <div>
        <WelcomePerson person={props.persons[0]}/>
        <WelcomePerson person={props.persons[1]}/>
        <WelcomePerson person={props.persons[2]}/>
        {props.persons.map((person)=><WelcomePerson person={person}/>)}

      </div>
    );
  }
 
  export {
    Welcome, MultiWelcome}