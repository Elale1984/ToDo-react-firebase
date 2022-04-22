import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Todo from './Todo';


function App() {
  //state (short term memory)
  const [todos, setTodos] = useState(['Go tto the store', 'Take dogs for a walk', 'take out the rubbish']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //stop REFRESH
    event.preventDefault();
    // This will fire when we click the button
    setTodos([...todos, input]);
    
    //Reset field to blank
    setInput(''); 


  }


  return (
    <div className="App">
      <h1>Hello World</h1>

      <form>


        <FormControl>
          <InputLabel> ✅ Write  A Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" 
          color="primary">
            Add Event
        </Button>
        
        
      </form>
      
      <ul>
        {todos.map(todo => (

          <Todo text={todo}/>
        
        ))}
      </ul>
    </div>
  );
}

export default App;
