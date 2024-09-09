import React,{memo} from 'react'

function UseCallback1({todo,addtodo}) {
    console.log("this is chaild")
  return (
    <div>
        <h1>this is add toto function this is example of usecallback hook</h1>
        {todo.map((e,i)=>{return(<>
                    <p key={i}>{e+i}</p>
                    </>)})}
       
        <button onClick={()=>{addtodo()}}>add todo</button>

    </div>
  )
}

export default memo(UseCallback1)