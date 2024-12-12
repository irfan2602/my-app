import React, { useState } from 'react'

const UseMemoComp = () => {
    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState<string[]>([])
    const expensiveCalValue = expensiveCall(count)
    const addTodo = () => {
        setTodo((pre) => [...pre,"New Todo"])
    }
    return (
        <div>
            {
                todo && todo.map((data,i) => {
                    return <p key={i}>{data}</p>
                })
            }
            <button type='submit' onClick={addTodo}></button>
            <strong> Count: {expensiveCalValue}  </strong>
            <button type='submit' onClick={() => setCount(count+1)} >Increase</button>
            <hr />
        </div>
    )
}

const expensiveCall = (num:any) =>{
    for(let i=0;i<=10000000000;i++){}
    return num
}

export default UseMemoComp
