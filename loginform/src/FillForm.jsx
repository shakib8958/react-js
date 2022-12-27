import React, { useState } from "react";
import './style.css';
function FillForm(){
    const[name,setName] = useState();
    const[mail,setMail] = useState();
    const[password,setPassword] = useState();
    const[phone,setPhone] = useState();
    function chk(){
        console.log("this is form");

    }
    
    return(
        <>
<form action="">
<h1> Please fill the form:{name}.{mail}.{phone}.{password}</h1>
<div id="id01" class="modal">
<label htmlfor="username">Full Name</label>
<br/>
<input type="text" name="mail" id="mail" onChange={(e)=>setName(e.target.value)}/>
<br/>
</div>
<div>
<label htmlfor="mail">Mail</label>
<br/>
<input type="text" name="mail" id="mail" onChange={(e)=>setMail(e.target.value)}/>
<br/>
</div>
<div>
<label htmlfor="phone">Phone</label>
<br/>

<input type="text" name="mail" id="mail"  onChange={(e)=>setPhone(e.target.value)}/>
<br/>

</div>
<div>
<label htmlfor="password">Password</label>
<br/>
<input type="password" name="mail" id="mail"  onChange={(e)=>setPassword(e.target.value)}/>
<br/>
</div>
<br/>
<button onClick={()=>chk()}> submit</button>
</form>


        </>
    )
}

export default FillForm;