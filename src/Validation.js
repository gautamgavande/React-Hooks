import React, { useState } from 'react'

function Validation() {
    const [name,setname]=useState("")
    const [pass,setpass]=useState("")
    const [texterr,seterrt]=useState(false)
    const [passerr,seterrp]=useState(false)
    function handleform(e){
        if(name.length>3 || pass.length>3){
            alert("reenter name and password")
        }
        else{
            alert("well done !")
        }
       e.preventDefault()
    }
    function textchange(e){
        let len=e.target.value.length
        if(len<3){
            seterrt(true)
        }
        else{
            seterrt(false)
        }
    }
    function passchange(e){
        let lenpas=e.target.value.length
        if(lenpas<3){
            seterrp(true)
        }else{
            seterrp(false)
        }
    }
  return (
    <div>
        <form  onSubmit={handleform}>

        <h1>validation with if/else</h1>
        <input type='text' placeholder='enter name' onChange={textchange}></input>
        {
            texterr?<span>not valid</span>:<span></span>
        }
        <br></br><br></br>
        <input type='password' placeholder='password' onChange={passchange}></input>
        {
            passerr?<span>not valid password</span>:<span></span>
        }
        <br></br><br></br>
        <button type='submit'>submit</button>
        
        </form>
    </div>
  )
}

export default Validation