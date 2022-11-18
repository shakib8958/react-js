import React from "react";
import { useParams } from 'react-router-dom'
export default function Profile() {
    var {name,salary} = useParams()
    return (
        <>
        <div> This is profile Component </div>
        <h1> Name : {name}</h1>
        <h1>salary : {salary}</h1>
        </>

    )
    }
