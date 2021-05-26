import React from 'react'
import logo from '../assets/logo.svg'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar
        className='shadow'
        style={{ backgroundColor: '#FFCC00' }}
        expand='lg'
      >
        <Navbar.Brand href='#home'>
          <img
            src={logo}
            height='40'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <NavDropdown title='Service' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Parcel</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Health</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Interior</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>News</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.5'>
                Download User App
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Download Fighter App
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#link'>Bazar</Nav.Link>
            <NavDropdown title='Merchant' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Signup</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Login</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='text-light' href='#link'>
              <i class='fas fa-globe-asia'></i> EN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
