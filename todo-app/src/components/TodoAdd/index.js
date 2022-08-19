import React from 'react';
import './style.css'

const Index = ({handleSubmit, todo, setTodo}) => {
    

    return (
        <form className='form-container' onSubmit={e => handleSubmit(e)}>
        <div className='form-field'>
            <label>Name</label><br />
            <input
            type='text'
            name='name'
            value={todo.name}
            placeholder='What is your plan?'
            onChange={e => setTodo({ ...todo, name: e.target.value })}
            />
        </div><br />
        <div className='form-field'>
            <label>Description</label><br />
            <input
            type='text'
            name='description'
            value={todo.desc}
            placeholder='How it will goin?'
            onChange={e => setTodo({ ...todo, desc: e.target.value })}
            />
        </div><br />
        <button type='submit' className='form-button'>
            {todo.id ? 'edit' : "add"}
        </button>
        </form>
    );
};

export default Index;