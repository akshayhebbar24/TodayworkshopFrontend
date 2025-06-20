import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect, use} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import api from './api';
import TodoForm from './components/TodoForm';
import ToList from './components/ToList';

function App() {
 const [todos, setTodos] = useState([]);

 const fetchTodos = () => {
  api.get('/')
    .then(response => {
      setTodos(response.data);
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
 }
const deleteTodo = async(id) => {
  try {
    await api.delete(`/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
}

const toggleTodo = async (id, completed) => {
  try {
    const updatedTodo = await api.put(`/${id}`, { completed: !completed });
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo.data : todo)));
  } catch (error) {
    console.error('Error toggling todo:', error);
  }
}



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
       <h1>To Do List</h1>
        <TodoForm onTodoAdded={fetchTodos} />
        <ToList todos={todos} onTodoDelete={deleteTodo} onTodoToggle={toggleTodo} />

      </div>
    </Router>
  );
}

export default App;

