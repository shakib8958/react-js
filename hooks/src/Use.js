import React, {useState} from 'react';
function Use() {
    const[count , setCount] = useState(0)


return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+7)}>click</button>
    </>
);
};
export default Use;