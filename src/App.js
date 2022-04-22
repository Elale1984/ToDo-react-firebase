import React, { useState } from 'react';
import './App.css';

function App() {
  //state (short term memory)
  const [todos, setTodos] = useState(['Go tto the store', 'Take dogs for a walk', 'take out the rubbish']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    // This will fire when we click the button
    setTodos([...todos, input]);
    

  }


  return (
    <div className="App">
      <h1>Hello World</h1>
      <input val={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
