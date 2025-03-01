import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import FactorialCalculator from './components/Factcalc'

function App() {
  
  return (
    <>
      <Header></Header>

     <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path="/calculator" element={<FactorialCalculator/>}/>

     </Routes>
     
     
     <Footer></Footer>
    </>
  )
}

export default App
