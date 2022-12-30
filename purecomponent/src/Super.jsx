import React from "react";
export default class Super extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render(){
        console.log("check the rerendring")
        return(
            <>
            <h1> pure Component:{this.state.count}</h1>
            
            <button onClick={()=>this.setState({count:this.state.count+1})}> Update</button>
            </>
        )
    }
}

