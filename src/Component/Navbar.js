import React, { useState, useEffect } from 'react';
import './Navbar.css'
import Cookie from 'js-cookie';
import { Link } from 'react-router-dom'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function NavBar() {
  let mydata=Cookie.get('userInfo');
  const [show, setShow] = useState()
  const SignOut = () => {
            console.log("userInfo")
            Cookie.remove("userInfo")  
            setShow(false)
            window.location.href = "https://boring-davinci-11472a.netlify.app/login"
  }
  useEffect(() => {
    if(mydata)
    setShow(true)
  }, []);
  return (
    <div className="App">
      <Navbar className="Navabr" collapseOnSelect expand="sm"  variant="dark" fixed="top">
        <Navbar.Brand   ><h6><Link to="/" className="bism">PAGHAM 365</Link></h6></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {show && <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto">
            <NavDropdown className="depart" title="درج کریں" id="collasible-nav-dropdown">
              <NavDropdown.Item herf="#1" to="/addtopic" as={Link}  >عنوانات درج کریں</NavDropdown.Item>
              <NavDropdown.Item herf="#3" to="/addsubtopic" as={Link}  >سب عنوانات درج کریں</NavDropdown.Item>
              <NavDropdown.Item herf="#6" to="/adddetail" as={Link}  >تفصیل درج کریں</NavDropdown.Item>

              
            </NavDropdown>
            <NavDropdown className="depart" title="دیکھیں" id="collasible-nav-dropdown">
            <NavDropdown.Item herf="#2" to="/viewtopic" as={Link}  >عنوانات دیکھیں</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav >
            <Nav.Link onClick={SignOut}><h6 >Logout</h6></Nav.Link>

          </Nav>
        </Navbar.Collapse>}
      </Navbar>
    </div>
  );
}

export default NavBar;




          // <Link class="Link1" href="#home">Quran Hadith 360</Link>
          // <li class="dropdown">
          //   <Link  href="javascript:void(0)" class="dropbtn">عنوانات</Link>
          //   <div class="dropdown-content">
          //     <Link class="link2" >عنوانات درج کریں</Link>
          //     <Link class="link2" >عنوانات دیکھیں</Link>
          //   </div>
          // </li>
          // <li class="dropdown">
          //   <Link  href="javascript:void(0)" class="dropbtn">سب عنوانات</Link>
          //   <div class="dropdown-content">
          //     <Link class="link2" >سب عنوانات درج کریں</Link>
          //     <Link class="link2" >سب عنوانات دیکھیں</Link>

          //   </div>
          // </li>
          // <li class="dropdown">
          //   <Link href="javascript:void(0)" class="dropbtn">عنوانات کی تفصیل</Link>
          //   <div class="dropdown-content">
          //     <Link class="link2" >تفصیل درج کریں</Link>
          //     <Link class="link2" >تفصیل دیکھیں</Link>
          //   </div>
