import React, { memo } from 'react'

export interface todosInterface {
    todos: string[],
    addTodo: () => void
}

const Todos = (props: todosInterface) => {
    console.log('Child Component render')
    const { todos, addTodo } = props
    return (
        <div>
            <strong>Todos List :</strong>
            <button type='submit' onClick={addTodo} >Add TodoList</button>
            {
                todos && todos.map((data: string, i) => {
                    return (
                        <>
                            <p key={i}> {data} </p><br/>
                        </>
                    )
                })
            }
        </div>
    )
}

export default memo(Todos)
