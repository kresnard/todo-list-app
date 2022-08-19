import React from 'react';
import TodoCard from '../TodoCard';

import './style.css';

const Index = props => {
    console.log('props from list', props);

    const _deleteTodoHandler = id => {
        props.deleteTodos(id);
    };

    const _editTodoHandler = (id) => {
        props.editTodos(id)
    }

    return (
        <div>
        {props.todos.map(todo => {
            return (
            <TodoCard
                key={todo.id}
                name={todo.name}
                desc={todo.desc}
                deleteHandler={() => _deleteTodoHandler(todo.id)}
                editHandler={() => _editTodoHandler(todo.id)}
            />
            );
        })}
        </div>
    );
};

export default Index;