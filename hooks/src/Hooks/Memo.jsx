import React,{useState}from "react";

function Memo(){
    const[count,setCount] = useState(0);
    const[item,setItem] = useState(100);
    function chk(){
        return count*10
    }
    return(
        <>
        <h1>count:{count}</h1>
        <h2>{chk()}</h2>
        <button onClick={()=>setCount(count+1)}> Click</button>
        </>
    )
}
export default Memo;