import React from "react";
function ToList({ todos, onTodoDelete, onTodoToggle }) {
    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        <span onClick={() => onTodoToggle(todo.id,todo.completed)}></span>
                        <button onClick={() => onTodoDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}