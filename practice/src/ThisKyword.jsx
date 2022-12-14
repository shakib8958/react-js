import React from "react";
import { Component } from "react" 
export  default class ThisKyword extends React.Component{
    constructor(){
        super()
    }
    chk(){
        alert("hlw everyone this shakib here");
    }
    render() {
        return (
            <>
            <h1> please clickt he this event below down </h1>
        <button onClick={this.chk}> Click me </button>
            </>
        )
        
    }

}