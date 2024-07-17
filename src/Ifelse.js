import React, { useState } from 'react'

function Ifelse() {
    const [condition,setcondi]=useState(3)
    
  return (
    <div>
        {condition===1?<h1>i am one</h1>:<h1>i am not one</h1>}
        {condition===1?<h1>i am one</h1>:condition===2?<h1>i am two</h1>:<h1>i don't know what i am </h1>}
    </div>

  )
}

export default Ifelse