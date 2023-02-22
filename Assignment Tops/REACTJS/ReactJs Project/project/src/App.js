import React from "react";
import About from "./Components/About";
import Facts from "./Components/Facts";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Price from "./Components/Price";
import Quote from "./Components/Quote";
import Service from "./Components/Service";
import Topbar from "./Components/Topbar";
import Main from "./Main";
function App() {
  return (
    <>
      <Topbar/>
      <Header/>
      <Facts/>
      <About/>
      <Feature/>
      <Service/>
      <Price/>
      <Quote/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
