import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const WrapperComponent = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default WrapperComponent