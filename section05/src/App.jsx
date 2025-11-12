import './App.css'
import { useState, useEffect } from 'react'
import Header from "./components/header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";




function App() {
  useEffect(() => {
    console.log('effect!')
  })
  const state = useState(0)
  console.log(state)
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');
  console.log(count)

  return (
    <>
    <Header/>
    <Main/>
      <h2 onClick={() => {
        setLight(light === "OFF" ? "ON" : "OFF")
      }}>{light}</h2>
     <h1>안녕 리액트!</h1>
     <button onClick={() => setCount((count)=>count+1)}>
      {count}
     </button>
    <Footer/>
    </>
    
  )
}

export default App
