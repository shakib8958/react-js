import React ,{ useState }from 'react'

export default function FormExample()
 {
    var [employee, setemployee] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
    })
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setemployee(olddata=>{
            return{
                ...olddata,
                [name]:value
            }
        })
    }
    function postData(e) 
    {
        e.preventDefault()
        console.log(`Name = ${employee.name}\nEmail = ${employee.email}\nPhone =
         ${employee.phone}\nCity = ${employee.city}\nState = ${employee.state}`)
    }
    return (
        <>
            
                    <h1>My Form</h1>
                    <form>
                        <input type="text" onChange={getData} name="name" placeholder="Enter your Name"></input><br/>
                        <input type="email" onChange={getData} name="email" placeholder="Enter Email Id"></input><br/>
                        <input type="text" onChange={getData} name="phone" placeholder="Enter your Phone Number"></input><br/>
                        <input type="text" onChange={getData} name="city" placeholder="Enter your City Name"></input><br/>
                        <input type="text" onChange={getData} name="state" placeholder="Enter your State Name"></input><br/>
                        <button type='submit' onClick={postData}>Submit</button>
                    </form>
                
        </>
    )
}