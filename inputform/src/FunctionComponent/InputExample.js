import React, { useState } from "react";

export default function InputExample()
{
    var [fname, setfname] = useState("")
    var [lname, setlname] = useState("")
    var [dsg, setData] = useState("")
    function getData(e) {
        if (e.target.name === "fname")
        {
        setfname(e.target.value)
        }
        else if (e.target.name === "lname")
        {
        setlname(e.target.value)
        }
        else
        {
        setdsg(e.target.value)
        }
    
    }
    function postData(e) {
        if (fname.length >= 3)
        alert("Full Name : " +fname + " " + lname+"\nDesignation : " + dsg)

    }
    return (
        <>
        <h1> Input Example Form </h1>
        <h4>first Name : {fname}</h4>
        <h4>Last Name : {lname}</h4>
        <h4>Designation : {dsg}</h4>
        <input type="text" onChange={getData} name="fname" placeholder="Enter your First Name"/>
        <br/>
        <input type="text" onChange={getData} name="lname" placeholder="Enter your Last Name"/>
        <br/>
        <input type="text" onChange={getData} name="dsg" placeholder="Enter your Designation"/>
        <br/>
        <button onClick={postData}> Click Me</button>

        </>
    )

}