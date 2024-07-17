//import logo from './logo.svg';

import './App.css';
import Progress from './progress';
//import {Component,Component1}   from './component';
//import React, { useState } from 'react';
// import User from './User';
// import Form from './Form';
//import Ifelse from './Ifelse';
//import Validation from './Validation';
// import Props from './Props';
// import State from './state';
import Accordion from './task';

function App() {
  // const [data,setdata]=useState(0)
  // const [data1,getdata]=useState(null)
  // const [print,printdata]=useState(false)
  // function add(){
  //   setdata(data+1)
  // }
  // function sub(){
  //   setdata(data-1)
  // }
  // function getdata1(val){
  //   getdata(val.target.value)
  //   printdata(false)
  // }
  
  // var a=prompt("enter your name")
  // function apple(){
  //   a="mahi"
  //   alert(a)
    
  // }
  // function alertprop(){
  //   alert("props data alert")
  // }
  // let data1={
  //   name1:"gautam",
  //   age:20
  // }
  return (
    <div  className='App'>
      
      {/* <h1>user </h1>
      <Component />
      <Component1 />
      <User /> */}
      {/* <Form /> */}
      {/* <Ifelse /> */}
      {/* propes */}
      {/* <User name="gautam" sarname="gavande" city="bhopal" /> */}
      {/* <User name={"allok"} sarname={"sharma"} city={"bhopal"} /> */}
      
      {/* <button  onClick={add}>clivk me</button>
      <button  onClick={sub}>subtract</button>
      {data}
      <input  type='text' onChange={getdata1}></input>
      <button  onClick={()=>{printdata(true)}}>print data</button>
      {
        print?
        <h1>{data1}</h1>
        :null
      } */}
      {/* <h1>{data1}</h1> */}

      {/* <Validation /> */}
      {/* <Props data={alertprop} name={"gautam"} sarname={"gavande"} obj={data1}  /> */}
      
      {/* <Props  /> */}
      <Accordion></Accordion>
      <Progress></Progress>
      {/* <State/> */}
    </div>
   
  );
}

export default App;
