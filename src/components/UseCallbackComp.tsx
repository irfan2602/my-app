import React, { useCallback, useState } from 'react'
import Todos from './Todos'


const UseCallbackComp: React.FC = () => {
    const [todo, setTodo] = useState<string []>([])
    const [count, setCount] = useState<number>(0)

    /* const addTodo = () => {
        setTodo((preData) => [...preData, "New Data List"])
    } */
    const addTodo = useCallback(() => {
        setTodo((preData) => [...preData, "New data"])
    },[todo])
    return (
        <div>
            <Todos todos={todo as string[]} addTodo={addTodo} />
            <hr />
            <strong> Count: {count} </strong>
            <button type='submit' onClick={() => setCount(count+1)} >Increase</button>
        </div>
    )
}

export default UseCallbackComp
