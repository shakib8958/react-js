import React from "react";
export default class Example extends React.Component{
    constructor(){
        super();
        this.state={
            
            
        }
    }
    chk(){
        alert("Hlw this is class component use of the usestate");
    }
    render(){
        return (
            <>
            <h1>Heloo Student...</h1>
            //<button OnClick={this.chk()}> Click</button>
            <h2> arrow function throw do the call alert button</h2>
            <button onClick={()=>this.chk()}> click</button>
            </>
        )
    }
}