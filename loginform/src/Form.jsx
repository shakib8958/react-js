import React,{useState} from 'react';
function Form(){
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[SelectOption,setSelectOption] = useState();
    function chk(){
        alert("login forn")
    }
    return(
        <>
        <h1> this is login form for bcs students</h1>
        <br/>
        fill this form:{name}-{email}<br/>
        <input type="text" placeholder="enter the name" onChange={(e)=>setName(e.target.value)}></input>
        <br/>
        <input type="text" placeholder="enter the mail" onChange={(e)=>setEmail(e.target.value)}></input>
        <br/>
        <select onChange={(e)=>setSelectOption(e.target.value)}>
        <option >rect js</option>
        <option>script js</option>
        <option>node js</option>
        </select>
        <br/>
        <button onClick={()=>chk()}> Submit </button>
        </>
    )
}
export default Form;