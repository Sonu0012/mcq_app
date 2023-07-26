import React from 'react'

import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary bg-gradient" >
      
        <Navbar.Brand href="#home" className='me-auto ms-auto text-white'>MCQ Questions</Navbar.Brand>
        
    </Navbar>
  )
}

export default Header
