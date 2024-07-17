import React, { useState } from 'react'

function Progress() {
    let [width,setwidth]=useState(100)
    let [color,setcolor]=useState("red")
    function incriment(){
        if(width){
            setwidth(width+10)
        }
    } function decriment(){
        if(width>0){
            setwidth(width-10)
        }
    }
  return (
  <>
  <button onClick={incriment}>incriment</button>
  <button onClick={decriment}>decriment</button>
     <div style={{ height:"30px",width:`${width}px`,backgroundColor:"red"}}>
       
        </div>
  </>
    
  )
}

export default Progress