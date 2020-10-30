import './App.css';
import FormDemo from './FormDemo'
import FormDemoMultiple from './FormDemoMultiple'
import Person from './Person'

function App() {
  return (
    <div className="App">
      <h2>Simple form</h2>
      <FormDemo/>
      <hr/>
      <h2>Handling multiple inputs</h2>
      <FormDemoMultiple/>
      <hr/>
      <h2>Lifting State Up</h2>
      <Person/>
      <hr/>
    </div>
  );
}

export default App;
