import React from "react";
export default class UpdateValue extends React.Component{
    constructor(){
        super();
        this.state= {
            StudentName:'shakib'
        }
    }
    chk(){
        alert("My Name is shakib ali..");
        this.setState({StudentName:"choudhrey shaikib ali  i am the  softwere Er. "})
    }
    render(){
        return(
            <>
            <h1> How to any data and Any value update with use the setStae :{this.state.StudentName} </h1>
            <button onClick={()=>this.chk()}> Click me</button>
            </>
        )
    }
}