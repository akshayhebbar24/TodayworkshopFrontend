import React, { useState } from "react";
import api from "../api";  // Assuming you are using an API for submitting data

function TodoForm({ onTodoAdded }) {
    const [title, setTitle] = useState("");  // Track the title input

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent form submission from refreshing the page
        const newTodo = {
            title,
            completed: false,
        };

        // Assuming onTodoAdded is a function passed as a prop that handles adding a todo
        onTodoAdded(newTodo);
        
        // Optionally, if you need to clear the input after submission:
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Add a Task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}  // Update state on input change
                required
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
