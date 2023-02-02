import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./Navigation.css"
import logo from '../../img/logo.jpg'

export default function Navigation() {
  return (
    <div className='bg-theme  d-flex '> 
      <Nav className="container my-auto" activeKey="/">
      <Nav.Item className=' d-flex'>
        <img src={logo} width="55px" height="50px" alt="" className='rounded-3 my-auto'/>
        <Nav.Link href="/" className='text-light me-5 my-auto brand-name'>Tune.Expo</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' d-flex'>
          <Nav.Link href="#Music" className='text-light my-auto'>Musics</Nav.Link>
        </Nav.Item>
         {/* <Nav.Item className=' d-flex'>
          <Nav.Link eventKey="link-1" className='text-light my-auto'>Videos</Nav.Link>
        </Nav.Item> */}
         {/*<Nav.Item className='d-flex'>
          <Nav.Link eventKey="link-2" className='text-light my-auto'>Support</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' d-flex'>
          <Nav.Link eventKey="" className='text-light my-auto'>
            Downlaod
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item className=' d-flex'>
          <Nav.Link href="/aboutus" className='text-light my-auto'>AboutUs</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' d-flex'>
          <Nav.Link href="/contact" className='text-light my-auto'>ContactUs</Nav.Link>
        </Nav.Item>

        <Nav.Item className='ms-auto d-flex'>
          <Nav.Link href="/login" className='text-light my-auto'>LogIn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signup" className='text-light'><button className='btn btn-outline-light m-0'>SignIn</button></Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
  )
}
