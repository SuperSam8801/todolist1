// src/AddTodo.js
import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TodoContext } from './TodoContext';

const AddTodo = () => {
    const inputRef = useRef();
    const { todos, setTodos } = useContext(TodoContext);
    const navigate = useNavigate();

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = inputRef.current.value;
        setTodos([...todos, newTodo]);
        navigate('/');
    };

    return (
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={addTodo}>
                <input type="text" ref={inputRef} required />
                <button type="submit">Add</button>
            </form>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default AddTodo;
