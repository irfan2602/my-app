import React, { useState } from 'react'

const AddTodoList = () => {
    const [todoList, setTodoList] = useState<string[]>([])
    const [inputVal, setInputVal] = useState('')
    const handleAddTodoList = (e: any) => {
        e.preventDefault()
        setTodoList((pre) => [...pre, inputVal])
        setInputVal('')
    }
    const handleKeyEvent = (e: any) => {
        if(e.keyCode === 13){
            handleAddTodoList(e)
        }
    }

    return (
        <div>
            <input type='text' name="todoList" value={inputVal} onKeyDown={handleKeyEvent} onChange={(e) => setInputVal(e.target.value)} />
            <button type='submit' disabled={!inputVal ? true : false} onClick={handleAddTodoList} >Add Item</button>
            <hr />
            {
                todoList && todoList.map((data, i) => {
                    return (
                        <>
                            <strong key={i} > {data} </strong><br/>
                        </>
                    )
                })
            }
        </div>
    )
}

export default AddTodoList
