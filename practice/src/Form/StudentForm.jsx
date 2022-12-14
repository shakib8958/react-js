import Recat,{useState} from 'react';
function StudentForm(){
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [SelectOption,setSelectOption] = useState();



    function chk(){
        console.log(" heloo student...",name,email);
        //make the object than send the api file 
        var objData = {
            studentName : name,
            studentEmail : email
        }
        console.log(objData)
     


    }
    return(
        <> 
        <h1><center> Please fill the form for login again </center></h1>
        <br/>
        Check the Date : {name}-{email}-{password} -{SelectOption}<br/>
        <input type="text" placeholder="enter the your name" onChange={(e)=>setName(e.target.value)}></input>
        <br/>
        <input type="text" placeholder="please enter the your email id"  onChange={(e)=>setEmail(e.target.value)}></input>
        <br/>
        <input type="password" placeholder="enter the password" onChange={(e)=>setPassword(e.target.value)}></input>
        <br/>
        <br/>
        <select onChange={(e)=>setSelectOption(e.target.value)}>
        <option> react js</option>
        <option> js</option>
        <option> java</option>
        </select>
        <br/>
        <button onClick={()=>chk()}> Submit Form</button>
        
        </>
    )
}
export default StudentForm;