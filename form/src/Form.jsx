import React,{useState} from 'react';
function Form(){
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    function chk(){
        alert("login forn")
    }
    return(
        <>
        <h1> this is login form for bcs students</h1>
        <br/>
        fill this form:{name}-{email}<br/>
        <input type="text" placeholder="enter the name"></input>
        <br/>
        <input type="text" placeholder="enter the mail"></input>
        <br/>
        <button onClick={()=>chk()}> Submit </button>
        </>
    )
}
export default Form;