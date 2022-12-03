import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home;