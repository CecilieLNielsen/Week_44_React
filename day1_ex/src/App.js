import logo from './logo.svg';
import './App.css';
import person, {males, females, persons} from './File2'
import {Welcome, MultiWelcome} from './File3'


//const { firstName, lastName, gender, email } = person;
const { firstName, email } = person;

const names = [...males, ...females];
const names2 = [...males,"Kurt", "Helle", ...females, "Tina"];
console.log(names);
console.log(names2);

function App() {
  return (
    <div className="App">

<h2>Ex2</h2>
<p>{firstName}, {email}</p>


<h2>Ex3</h2><MultiWelcome persons={persons}/>
    </div>
  );
 
}



export default App;
