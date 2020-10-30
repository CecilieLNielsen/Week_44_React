import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import ListDemo from './ListDemo'


// OPGAVE 1 - UseState

function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props.passValue);

  useEffect(() => {
    localStorage.setItem("count", count);
    //count = Number(localStorage.getItem("count"))
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + props.passValue2)}>
        Increment
      </button>
      <button onClick={() => setCount(count - props.passValue2)}>
        Decrement
      </button>
      {props.name}
    </div>
  );
}

//OPGAVE 2 - Fetch and display jokes
const UseEffectExample = () => {
  const [joke, setJoke] = useState("");
/*
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(data => {
      setJoke(data.value);
    })
  })
*/
  return (
    <div>
      <button onClick={() => {
        fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(data => {
          setJoke(data.value);
        })
      }}>
        Klik her
      </button>
      <p>{joke}</p>
    </div>

  )
}

/*
function getJoke() {
  const url = 'https://api.chucknorris.io/jokes/random'
  fetch(url)
      .then(res => res.json()) //in flow1, just do it
      .then(data => {
          setJoke(data.value)
      })
}
*/



/*function NameList (props) {
  const names = props.names;
  const listItems = names.map((names) => <li key={names.toString}>{names}</li>);
return (
  <ul>{listItems}</ul>
)
}*/

function App() {
  const names = [{ 'fname': 'Anders', 'lname': 'Henriksen' }, { 'fname': 'Britta', 'lname': 'Albertsen' }, { 'fname': 'Kalle', 'lname': 'Fredborg' }] // <NameList names={names}/>
  return (
    <div className="App">
      <Example passValue={20} passValue2={5} />
      <UseEffectExample/>
      <ListDemo/>
    </div>
  );
}

class Dateshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <p>Date: {this.state.date.toString()} </p>
        <button onClick={() => this.setState({ date: new Date() })}>
          Click me for a date
        </button>
      </div>
    );
  }
}




export default App;
