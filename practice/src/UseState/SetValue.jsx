
import React,{useState} from "react";
function SetValue(){
    const[Value,SetValue]=useState("Shakib");
    function chk(){
        alert("My name is shakib ali");
    }
    return(
        <>
        <h4> hello this is how to use of use state in react js...{Value}</h4>
        <button onClick={chk}> click me </button>
        </>
    )
}
export default SetValue;