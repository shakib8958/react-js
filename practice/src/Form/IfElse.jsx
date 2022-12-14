import React,{useState} from 'react'
function IfElse(){
    const[checkOtp,setCheckotp] = useState(true)
    if(checkOtp){
        return<h3> login with otp is working</h3>
    }
    else{
        return<h3> login with opt is not working..</h3>
    }
}
export default IfElse;