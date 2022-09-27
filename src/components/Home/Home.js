import React from 'react'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import About from "../About/About"
import Services from '../Services/Services'

function Home() {
  return (
    <div className='col-sm-12'>
        <NavBar/>
        <Header/>
        <About/>
        <Services/>
    </div>
  )
}

export default Home