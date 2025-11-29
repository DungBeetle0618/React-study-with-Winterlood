import './App.css'
import { useState, useEffect } from 'react'
import Header from "./components/header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Bulb from './components/Bulb.jsx';
import Counter from './components/Counter.jsx';



function App() {
  return (
    <>
    <Bulb/>
    <Header/>
    <Main/>
    <Counter/>
    <Footer/>
    </>
    
  )
}

export default App
