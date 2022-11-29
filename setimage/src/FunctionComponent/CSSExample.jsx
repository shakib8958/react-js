import React from "react";
import { YAxis } from "recharts";
//import "../assets/css/mystyle.css"
import pic1 from "../assets/images/pic 3.jpg"
import pic2 from "../assets/images/pic 4.jpg"
import pic3 from "../assets/images/pic 5.jpg"
import pic4 from "../assets/images/pic 7.jpg"
import pic5 from "../assets/images/pic 6.jpg"


var hstyle = {
    backgroundColor: "purple",
    color: "white",
    padding: "10px",
    textAlign: "center"
    
}
var h1Style = {
    backgroundColor:"red",
    float:"right",
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
        <a href="https://www.infosys.com/navigate-your-next.html"> Navigate Your Text</a> <br/>
        <a href="https://www.infosys.com/iki.html">  Infosys Knowledge Insitiute </a><br/>
        <a href="https://www.infosys.com/investors.html">  Investors</a><br></br>
        <a href="https://www.infosys.com/careers/">  Careers  </a>
        <h1>Basic Pages Of Infosys Website...</h1>
        <img src={pic1} alt="" style={imgStyle}/>
        <h3> Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. The company was founded in Pune and is headquartered in Bangalore.[5] Infosys is the second-largest Indian IT company, after Tata Consultancy Services, by 2020 revenue figures, and the 602nd largest public company in the world, according to the Forbes Global 2000 ranking.[6]

        On 24 August 2021, Infosys became the fourth Indian company to reach $100 billion in market capitalization.[7][8]</h3>
        <br/>
        <br>
        </br>
        <img src={pic2} alt="" style={imgStyle}/>
        <br>
        </br>
        <h1><center> Our Purpose </center></h1>
        <br>
        </br>
        <h2><center>To amplify human potential and create the next opportunity for people, businesses and communities</center></h2>
        <br>
        </br>
        <h1><center> Careers </center></h1>
        <br></br>
        <h1>Every Infoscion is the navigator of our clients’ digital transformation</h1>
        <br>
        </br>
        <img src={pic3} alt="" style={imgStyle}/>
        <br></br>
        <img src={pic4} alt="" style={imgStyle}/>
        <br></br>
        <h1> Employes</h1>
        <br/>
        <p>Infosys had a total of 259,619 employees (generally known as "Infoscions") as of 2021, out of which 38.6% were women.[27] Out of its total workforce, 229,658 are software professionals and remaining 13,796 work for support and sales.[27] In 2016, 89% of its employees were based in India.[55]

        During the financial year 2019, Infosys received 2,333,420 applications from prospective employees, interviewed 180,225 candidates and had a gross addition of 94,324 employees, a 4% hiring rate. These numbers do not include its subsidiaries.[55]
        
        In its Q3FY22 results in January, Infosys has reported that attrition has risen to 25.5%, from 20.1% in the September quarter. It has announced a profit of Rs 5,809 crore for the third quarter and said it is planning to hire 55,000 freshers for FY22 as part of its global graduate hiring program.</p>
        <br/>
        <img src={pic5} alt="" style={imgStyle}/>

        
        </>
    )
}