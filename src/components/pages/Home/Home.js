import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Slider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { dataClients, dataOurTeam } from './Data';


const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };
  return (
    <>
    <header>
    <div className="header_description">
               <h3></h3>
               <h1>Judge & <span>Justice</span>.</h1>
               <h2>We are your progressive <br/> <span>law</span> partner.</h2>
               <div className='text'>
                       <h4>Working Hours</h4><i className='far fa-clock'></i> 
                       <Link to="/contact"> Monday - Sunday : 9.00am to 6.00pm </Link>
               </div>
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

      <div className="about">
      {/* <div className='title_img'></div> */}
          <h3>GOOD BUSINESS</h3> 
          <h2>A VERY DIFFERENT KIND OF BUSINESS LAW FIRM</h2>
          <hr />
          <ul className="paragraph">
            <li className="paragraph_inner">
            Good business attorneys know the law and how it applies. Great business attorneys know that, too, but they know something else that’s just as important. They know how to understand a client’s goals and how to craft their representation with the singular aim of achieving them efficiently.They’ve been on your side of the table. They know what clients want because they’ve been clients.They know how to understand a client’s goals and how to craft their representation with the singular aim of achieving them efficiently.They’ve been on your side of the table.
            </li>
            <li className="paragraph_inner">
            They’ve been on your side of the table. They know what clients want because they’ve been clients. We’re a different kind of law firm because we are made up of a different kind of lawyers. It’s about time you had that option.They know how to understand a client’s goals and how to craft their representation with the singular aim of achieving them efficiently.They’ve been on your side of the table.They know how to understand a client’s goals and how to craft their representation with the singular aim of achieving them efficiently.They’ve been on your side of the table.
            </li>
          </ul>
      </div>

      <div className='client'>
          <h2 className='client_title'>What Client's Say ?</h2>
          <Slider {...settings2}>
          {dataClients.map((item) => (
          <div className='card'>
           <div className='card-top'>
             {/* <img src={item.img} alt={item.title} /> */}
             <p>{item.says}</p>
           </div>
           <div className='card-bottom'>
             <h3>{item.job}</h3>
             <h2>{item.name}</h2>
           </div>
         </div>
        ))}
        </Slider>
      </div>
      
      <div className='team'>
        <h1 className='team_title'> Our Professional TEAM </h1>
        <Slider {...settings}>
        {dataOurTeam.map((item) => (
           <div className='card'>
           <div className='card-top'>
             <img src={item.img} alt={item.title} />
             <h2>{item.title}</h2>
           </div>
           <div className='card-bottom'>
             <h3>{item.areas}</h3>
             <p>{item.about}</p>
           </div>
         </div>
        ))}
        </Slider>
      </div>

      
      

      {/* <div className='testimonial'>
        {/* <h1>- WHAT CUSTOMERS SAY? -</h1> 
        <Slider {...settings2}>
        {dataTestimonial.map((item) => (
           <div className='card'>
           <div className='card-top'>
             <img src={item.img} alt={item.title} />
             <h2>{item.title}</h2>
           </div>
           <div className='card-bottom'>
             <h3>{item.areas}</h3>
             <p>{item.about}</p>
           </div>
         </div>
        ))}
        </Slider>
      </div> */}
      
      
        

        
    </>
  )
}

export default Home;