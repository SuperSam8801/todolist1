// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoProvider } from './TodoContext';
import Home from './Home';
import AddTodo from './AddTodo';

const App = () => {
    return (
        <TodoProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/add" element={<AddTodo />} />
                </Routes>
            </Router>
        </TodoProvider>
    );
};

export default App;
