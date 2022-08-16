import React from 'react'
import Todoadd from '../components/TodoAdd'
import Todolist from '../components/TodoList'
import './style.css'

const Index = () => {
    return (
        <div className='pages'>
            <h1>Hello, Create Your Activity!</h1>
            <Todoadd />
            <Todolist />
        </div>
    )
}

export default Index;
