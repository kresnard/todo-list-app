import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Todoadd from '../components/TodoAdd';
import Todolist from '../components/TodoList';

const Index = () => {
    const LOCAL_STORAGE_KEY = 'list-todos';
    const [todos, setTodos] = useState([]);

    const addTodoHandler = todo => {
        const newTodo = [{ id:uuidv4(), name: todo.name, desc: todo.desc}];
        setTodos([...todos, newTodo]);
        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify([...todos,...newTodo])
        );
    };

    const deleteTodoHandler = id => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    };

    useEffect(() => {
        const listTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        listTodos && setTodos(listTodos);
    }, [setTodos]);


    return (
        <div>
            <h1>Hello, Create Your Activity!</h1>
            <Todoadd addHandler={addTodoHandler} />
            <Todolist todos={todos} deleteTodos={deleteTodoHandler} />
        </div>
    );
};

export default Index;
