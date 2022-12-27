import  React,{ useEffect, useState } from "react";
function Effect() {
    const[count,setCount] = useState(0);
    const[data,setData] = useState(100);
    useEffect(()=>{
        
    

    },[])
    
    return (
        <>
        <h1> use effact</h1>
        <h2>{count}</h2>
        <h2>{100}</h2>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
        <button onClick={()=>{setData(data*1)}}>Update</button>
        </>
    )

}
export default Effect;
