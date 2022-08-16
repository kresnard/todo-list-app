import React, { useState } from 'react';

const Index = props => {
    const [todo, setTodo] = useState({
        id: '',
        name: '',
        desc: ''
    });

    // console.log(props);
    const handleSubmit = e => {
        e.preventDefault();
        if (!todo.name || !todo.desc) {
        alert('Please fill in all fields');
        return;
        } else {
        props.addHandler(todo);
        }
        setTodo({
        id: '',
        name: '',
        desc: ''
        });
    };

    return (
        <form className='form-container' onSubmit={e => handleSubmit(e)}>
        <div className='form-field'>
            <label>Name</label><br />
            <input
            type='text'
            name='name'
            placeholder='What your plan?'
            onChange={e => setTodo({ ...todo, name: e.target.value })}
            />
        </div><br />
        <div className='form-field'>
            <label>Description</label><br />
            <input
            type='text'
            name='description'
            placeholder='How it will goin?'
            onChange={e => setTodo({ ...todo, desc: e.target.value })}
            />
        </div><br />
        <button type='submit' className='form-button'>
            Add
        </button>
        </form>
    );
};

export default Index;