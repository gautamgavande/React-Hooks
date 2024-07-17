import React, { useState } from 'react'

function State() {
    // let a=10;
    // function add(){
    //     a=15
    // }
    // console.log(a)
    // add()
    let [a,seta]=useState(10)
    function add(){
        seta(15)
    }

  return (
    <div>
        {a}
        <button onClick={add}>add</button>
    </div>
  )
}

export default State