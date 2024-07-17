import React, { useState } from 'react'

function Form() {
  const [input,setinput]=useState("")
  const [select,setselect]=useState(false)
  const[check,setcheck]=useState("")
  function submit(e){
    console.warn(input,select,check);
    console.log(select);
    console.log(check);
    e.preventDefault()
  }
  return (
    <div>
        <form  onSubmit={submit}>
            <h1>user form</h1>
            <input type='text'  onChange={(e)=>setinput(e.target.value)}></input><br></br><br></br>
            
            <select  onChange={(e)=>setselect(e.target.value)}>
              <option>ME</option>
              <option>CSE</option>
              <option>CI</option>
            </select><br></br><br></br>
           
           <input type='checkbox'    onChange={(e)=>setcheck(e.target.checked)}></input> <span>check box</span><br></br><br></br>
           <button id='3'  type='submit'>submit</button>

        </form>
    </div>
  )
}

export default Form