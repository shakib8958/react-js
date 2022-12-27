import React,{useState} from 'react';
function HideShow(){
    const[show,setShow] = useState(true)
    return (
        <>
        
        {
            show?<h2> hello word.how to show and hide the method of process</h2>:null
        }
            //<button onClick={()=>setShow(true)}>show</button>
            //<button onClick={()=>setShow(false)}> Hide</button> 
            <button onClick={()=>setShow(!show)}> Toggle </button>
        
            </>
    )
}
export default HideShow;