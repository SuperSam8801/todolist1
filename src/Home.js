// src/Home.js
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from './TodoContext';

const Home = () => {
    const { todos } = useContext(TodoContext);

    useEffect(() => {
        console.log('Todos:', todos);
    }, [todos]);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <Link to="/add">Add Todo</Link>
        </div>
    );
};

export default Home;
