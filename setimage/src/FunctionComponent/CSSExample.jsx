import React from "react";
import { YAxis } from "recharts";
//import "../assets/css/mystyle.css"
import pic1 from "../assets/images/pic 3.jpg"
import pic2 from "../assets/images/pic 4.jpg"
import pic3 from "../assets/images/pic 5.jpg"

var hstyle = {
    backgroundColor: "purple",
    color: "white",
    padding: "10px",
    textAlign: "center"
    
}
var imgStyle = {
    width: "33%",
    height:"300%"
}
export default function CSSExample() {
    return (
        <>
        <h1 style={{
            backgroundColor:"purple",
            color:"white",
            padding:"10px",
            textAlign:"center"

        }}> Welcome to the Infosys  </h1>
        <h1>Lets do the complete this project of Infosys..</h1>
        <img src={pic1} alt="" style={imgStyle}/>
        <img src={pic2} alt=""style={imgStyle}/>
        <img src={pic3} alt=""style={imgStyle}/>
        </>
    )
}