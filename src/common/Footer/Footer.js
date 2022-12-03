import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
      <ul className="footer_address">
        {/* <li className="address_map">
          <iframe width="100%" 
          height="300" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kuzguncuk,%20Ku%C5%9Fbak%C4%B1%C5%9F%C4%B1%20Cd.%20No:18,%2034674%20%C3%9Csk%C3%BCdar/%C4%B0stanbul+(Z%C3%BCmr%C3%BCt%20Hukuk%20B%C3%BCrosu)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe>
        </li> */}
        <li className="address_info">
          <ul className="address_list">
            
            <li className="address_list-item">
            <i className="fa-solid fa-phone"></i> <a href="">0274-546-98-76</a> 
            </li>
            <li className="address_list-item">
            <i className="fa-solid fa-location-dot"></i> <a href="">Kuzguncuk, Kuşbakışı Cd. No:18 <br /> 34674 Üsküdar/İstanbul</a> 
            </li>
            <li className="address_list-item">
            <i className="fa-solid fa-envelopes-bulk"></i> <a href="">zümrüthukuk@gmail.com</a> 
            </li>
          </ul>
        </li>
      </ul>
      
    </div>
    <div className="copyright">
      <p>2022 - All Rights Reserved.</p>
      
      <div className='footer-img'></div>
      </div>
    </>
  )
}

export default Footer;