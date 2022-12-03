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
                    <li><Link to='/' onClick={closeMobileMenu}>Home</Link> </li>
                    <li><Link to='/jobs' onClick={closeMobileMenu}>Practice Areas</Link> </li>
                    <li><Link to='/testimonial' onClick={closeMobileMenu}>Testimonials</Link> </li>
                    <li><Link to='/team' onClick={closeMobileMenu}>Our Team</Link> </li>
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

      <header>
        <div className='container flex_space'>
            

            <div className="header_description">
                <h3></h3>
                <h1>Judge & <span>Justice</span>.</h1>
                <h2>We are your progressive <br/> <span>law</span> partner.</h2>
                <div className='text'>
                        <h4>Working Hours</h4><i className='far fa-clock'></i> 
                        <Link to="/contact"> Monday - Sunday : 9.00am to 6.00pm </Link>
                </div>
            </div>

                <div className='box'>
                    {/* <div className='icon'></div> */}
                    
                </div>
                
        </div>
        <div className='logo'>
                {/* <img src='' /> */}
            </div>
        

        
      </header>
        <div className="awards">
          <ul className="awards_list">
            <li className="awards_item">
              <img src="TLG-Legal-Award-Badge-2020@0.75x.png" alt="" />
            </li>
            <li className="awards_item2"></li>
            <li className="awards_item3"></li>
            <li className="awards_item4"></li>
          </ul>
        </div>
    </>
  )
}

export default Navbar