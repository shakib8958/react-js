import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import Navbar from "./Navbar";
import Error from "./Component/Error";

export default function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>\
   <Route path="/" element={<Home/>}></Route>
   <Route path="/about" element={<About/>}></Route>
   <Route path="/contact" element={<Contact/>}></Route>
   <Route path="/profile/:name/:salary" element={<Profile/>}></Route>
   <Route path="*" element={<Error/>}></Route>
   
   </Routes>
   </BrowserRouter>

   </>
  );
}


