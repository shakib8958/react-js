import React from "react";
export default class IncrementDate extends React.Component{
    constructor(){
        super();
        this.state= {
            data:1
        }
    }
    chk(){
        //alert("My Name is shakib ali..");
        this.setState({data:this.state.data+1})
    }
    render(){
        return(
            <>
            <h1> How to any data and Any value update with use the setStae :{this.state.data} </h1>
            <button onClick={()=>this.chk()}> Click me</button>
            </>
        )
    }
}