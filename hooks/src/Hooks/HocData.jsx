import { useState } from "react";

function StudentHigherOrderComponent(){
    // return (
    //     <>
    //         <h3>Student Higher Order Component</h3>
    //         <HOC hocComponent="test data"/>
    //         <HOC2 hocComponent="test data"/>

    //     </>
    // )
    
    // function HOC(getProps){
    //     // console.log(getProps)
    //     return(
    //         <>
    //             <h3>this is a HOC</h3>
    //             {/* {getProps.hocComponent} */} 
    //             {/* how to get data from a Component as a props */}
    //         </>
    //     )
    // }

    // function HOC2(getProps){
    //     // console.log(getProps)
    //     return(
    //         <>
    //             <h3>this is a HOC 2</h3>
    //             {getProps.hocComponent} 
    //             {/* how to get data from a Component as a props */}
    //         </>
    //     )
    // }

    return (
        <>
            <h3>Student Higher Order Component</h3>
            <HOC hocComponent={MyFunc}/>
            <HOC2 hocComponent={MyFunc}/>
            {/* <MyFunc /> */}

        </>
    )
    
    function HOC(getProps){
        // console.log(getProps)
        return(
            <>
                <h3>this is a HOC</h3>
                <getProps.hocComponent />
            </>
        )
    }

    function HOC2(getProps){
        // console.log(getProps)
        return(
            <>
                <h3>this is a HOC 2</h3>
                <getProps.hocComponent />
            </>
        )
    }



    function MyFunc(){
    const [count, setCount] = useState(0);
        
        return (
            <>
                <h3>thi is a myFunc - {count}</h3>
                <button onClick={()=>setCount(count+1)}>Update Count</button>
            </>
        )
    }

}
export default StudentHigherOrderComponent; 