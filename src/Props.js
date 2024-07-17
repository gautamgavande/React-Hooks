import React from 'react'

function Props(props) {
  const resobj=props.obj

  return (
    <div>
        <h1>props and passing  function in props my {resobj.name1} {resobj.age}</h1>
        <h1>props and passing function in props {props.name} {props.sarname}</h1>
        <button  onClick={props.data}>click me</button>
        
    </div>
  )
}

export default Props