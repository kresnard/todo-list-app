import React from 'react'

const Index = () => {
    return (
        <div className='card-container'>
            <div className='card-header'>
                <h1>Todo Card</h1>
            </div>
            <div className='card-content'>
                <div className='card-field'>Name: </div>
                <div className='card-field'>Description: </div>
            </div>
            <button className='card-delete'>delete</button>
        </div>
    )
}

export default Index;