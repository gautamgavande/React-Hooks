import React, { useCallback, useState } from 'react'
import UseCallback1 from './UseCallback1'

function UseCallback() {
    const [todo ,settodo]=useState([])
    const [count,setCount]=useState(0)


    const increment=()=>{
        setCount(count+1)
    }
    // const addtodo=()=>{
    //     settodo([...todo,"newtask"])
    // }
    const addtodo = useCallback(()=>{
        settodo((prev)=>[...prev,"newtodo"])
    },[todo])
  return (
    <div>
        {count}
        <br></br>
        <button onClick={()=>{increment()}}>addd</button>
        <hr></hr>
        <UseCallback1 todo={todo}  addtodo={addtodo}></UseCallback1>
    </div>
  )
}

export default UseCallback