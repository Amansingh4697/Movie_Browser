import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
function App() {
    function Layout(){
     return ( <div style={{height:"100vh"}}>
          <h1>
        welcome to movie Browser app
        </h1>
        <div style={{height:"90vh"}}>
          <Outlet></Outlet>
        </div>
        about | contact us
      </div>)
    }
  function Home(){
    return (
      <div>Welcome to home page</div>
    )
  }
  function About(){
    return(
    <div>
      <h1>contact us on this details</h1>
    </div>
   )
  }
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout/>}>
        <Route path="/home" element= {<Home/>}></Route>
        <Route path='/about' element = {<About></About>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
