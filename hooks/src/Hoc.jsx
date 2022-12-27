import React from 'react';
export default class Hoc extends React.Component{
    constructor(){
    super();
    this.state={
        StudentName:"Shakib"
  
      }
      
}
    chk(){
        
        this.setState({StudentName:"This Side "})

    }
    render(){

    return(
        <>
        <h1> this is page:{this.state.StudentName}</h1>
        <button onClick={()=>this.chk()}> change the data</button>
        </>
    )
}
    }



