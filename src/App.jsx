import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
   const [colors,setColors]=useState("rgb(235, 235, 41)")
    const [color, setcolor]= useState("#000");
    const [bcolor, setbcolor]= useState('rgb(235, 235, 41)')
  const click_blue =()=>{
  setColors("blue")
  setcolor("#fff")
  setbcolor("blue")
  }
 const click_orange=()=>{
  setColors("orange")
  setcolor("#fff")
  setbcolor("orange")
 }
 const click_green =()=>{
  setColors("green")
  setcolor("#fff")
  setbcolor("green")
 }
  const click_gray=()=>{
    setColors("gray")
    setcolor("#000")
    setbcolor("gray")
  }
  return (
    <>
      <div className="container">
        <div className="perfil_container">
          <div className="content-text">
            <img src="./../public/img.jpg"  />
            <div className="text">
              <h4 style={{color:colors}}>Daniel Samassumba </h4>
              <h5>Senior Web Developer</h5>
            </div>
          </div>
          <div style={{backgroundColor:colors}} className="top-content">

          </div>
          <div className="content-count">
            <div className="fallowers">
              <h3>1.5k</h3>
              <h5 style={{color:colors}}>fallowers</h5>
            </div>
            <div className="fallowing">
              <h3>852</h3>
              <h5  style={{color:colors}}>fallowing</h5>
            </div>
          </div>
          <div className="btns">
            <button  style={{backgroundColor:colors, color:color}}>Fallow</button>
            <button className='sms' style={{border:`solid ${bcolor}`}}>Message</button>
          </div>
          <div className="color-content">
             
         
              <span className='orange' onClick={click_orange}></span>
              <span className='green' onClick={click_green}></span>
              <span className='gray'  onClick={click_gray}></span>
              <span className='blue' onClick={click_blue}></span>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default App
