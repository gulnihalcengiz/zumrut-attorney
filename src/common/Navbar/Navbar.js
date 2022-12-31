import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import './law-app/src/App.css';

const Navbar = () => {
    const [ click, setClick] = useState(false)
    
    const hanleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
    <>
      <div className='top-number'>
        <h4>call-us: <Link to="/contact"><i className='fa-solid fa-phone'></i> 312-987-99-87</Link></h4> 
      </div>
      <nav className='navbar'>
        <div className='container flex_space'>
            <div className='menu-icon' onClick={hanleClick}>
            <i class= {click? "fas fa-times" : "fas fa-bars" }></i>
            </div>

                <ul className= {click? 'nav-menu active' : "nav-menu" }>
                    <li><Link to='/home' onClick={closeMobileMenu}>Home</Link> </li>
                    <li><Link to='/jobs' onClick={closeMobileMenu}>Practice Areas</Link> </li>
                    {/* <li><Link to='/testimonial' onClick={closeMobileMenu}>Testimonials</Link> </li> */}
                    <li><Link to='/blogs' onClick={closeMobileMenu}>Blogs</Link> </li>
                    <li><Link to='/contact' onClick={closeMobileMenu}>Contact</Link> </li>
                </ul>

                <div className='login-area flex'>
                    {/* <li>
                        <Link to='/sign-in'>
                            <i className='far fa-chevron-right'></i>Sign In
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <i className='far fa-chevron-right'></i>Register
                        </Link>
                    </li> */}
                    <li>
                        <Link to='/contact'>
                            <button className='primary-btn'>Request a Quote</button>
                        </Link>
                    </li>
                </div>
        </div>
      </nav>

      
    </>
  )
}

export default Navbar