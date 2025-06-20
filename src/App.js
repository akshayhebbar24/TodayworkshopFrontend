import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect, use} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import api from './api';
function App() {
 const [todos, setTodos] = useState([]);
useEffect(() => {
  api.get('/')
    .then(response => {
      setTodos(response.data);
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
}

, []);
return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Todo List</h1>
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <ul>
                {todos.map(todo => (
                  <li key={todo.id}>{todo.title}-{todo.completed?'Done':'Unfinished'}</li>
                ))}
              </ul>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
