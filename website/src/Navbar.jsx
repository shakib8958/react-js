import React from "react";
import { NavLink } from 'react-router-dom'
import "./mystyle.css"
export default function Navbar() {
    return (
        <>
        <ul>
        <li><NavLink to='/'> Navigate Your Text</NavLink></li>
        <li><NavLink to='/about'>  Infosys Knowledge Insitiute </NavLink></li>
        <li><NavLink to='/profile/Unknown'>  Investors</NavLink></li>
        <li><NavLink to='/contact'>  Careers  </NavLink></li>
        </ul>
        </>
    )
}