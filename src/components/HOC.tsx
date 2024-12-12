import React, { useState } from 'react'

const HOC = () => {
  return (
    <div>
      <RedWrapper cmp={Generic} />
      <GreenWrapper cmp={Generic} />
    </div>
  )
}

const RedWrapper = (props:any) => {
    return <p style={{backgroundColor:'red',width:'300px',height:'100px'}}> <props.cmp></props.cmp> </p>
}

const GreenWrapper = (props:any) => {
    return <p style={{backgroundColor:'green',width:'300px',height:'100px'}}> <props.cmp></props.cmp> </p>
}

const Generic = () => {
    const [count, setCount] = useState(0)
    return(
        <>
            <strong> Count : {count} </strong>
            <button type='submit' onClick={() => setCount(count+1)} >Increment</button>
        </>
    )
}

export default HOC


