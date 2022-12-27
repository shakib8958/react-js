import React,{useEffect,useState} from "react";

function UseEffact(){
    const[count,setCount] = useState(0)
    useEffect(()=>{
        console.log("use effaft ")
    })

    
    return(
        <>
        <h1> this use effact</h1>
    <h2> hello </h2>
    <button onClick={()=>setCount(1)}> update counter</button>
        </>
    )
}
export default UseEffact;