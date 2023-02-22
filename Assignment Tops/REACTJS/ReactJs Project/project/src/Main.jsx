import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Detail from "./Components/Detail";
import Feature from "./Components/Feature";
import Price from "./Components/Price";
import Quote from "./Components/Quote";
import Service from "./Components/Service";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";
import Pages from "./Components/Pages";
import BlogD from "./Components/BlogD";
import BlogG from "./Components/BlogG";
function Main() {
return (
    <>
<Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
        <Route path='/blog' element={ <Blog/> }></Route>
        <Route path='/contact' element={ <Contact/> }></Route>
        <Route path='/detail' element={ <Detail/> }></Route>
        <Route path='/feature' element={ <Feature/> }></Route>
        <Route path='/price' element={ <Price/> }></Route>
        <Route path='/quote' element={ <Quote/> }></Route>
        <Route path='/service' element={ <Service/> }></Route>
        <Route path='/team' element={ <Team/> }></Route>
        <Route path='/testimonial' element={ <Testimonial/> }></Route>
        <Route path='/pages' element={ <Pages/> }></Route>
        <Route path='/BlogD' element={ <BlogD/> }></Route>
        <Route path='/BlogG' element={ <BlogG/> }></Route>
    </Routes>
    </>
);
}

export default Main;
