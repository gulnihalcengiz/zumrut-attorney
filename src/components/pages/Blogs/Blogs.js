import React from 'react';
import './Blogs.css';
import { blog } from './Data';
import {AiOutlineClockCircle, AiOutlineShareAlt, AiOutlineTags} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Blogs = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
    <div className='jobs_banner'>
        <div className='jobs_description'>
          <h2 className='jobs_title'>ZUMRUT ATTORNEY <hr/></h2> 
          <p className='jobs_paragraph'>
            We understand the emotional & financial turmoil involved with domestic relations. <br /> While we strive for peace and cooperation, <br/> we also aggressively protect our clients when necessary.
          </p>
        </div>
    </div>
      <div className='choose'>
            <h2>Why You Need Top <br/>Lawyers in <span>Zumrut</span> ? </h2>
            <h3>"Our professional leadership team is truly committed to producing the best results for our clients very successfully."</h3>
            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway workplace diversity and empowerment.</p>
            <div className='choose_img'><img className='choose_img2'/> </div>
      </div>

      <section className='blog_section' id='blog'>
        <h1>WHAT'S NEW ?</h1>
        <div className='container grid3'>
        
        {blog.map((item) => (
          <div className='blog_box' key={item.id}>
            <div className='img'>
              <img src={item.cover} />
            </div>
            <div className='details'>
              <div className='tag'>
                <AiOutlineTags className='icon' />
                <a href='/'>#{item.category}</a>
              </div>
              <Link to={`/details/${item.id}`} className="link">
                <h3>{item.title}</h3>
              </Link>
              <p>{item.desc.slice(0, 180)} ... </p>
              <div className='date'>
                <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
              </div>
            </div>
          </div>
        ) )}
        </div>
      </section>
    </>
  )
}




export default Blogs;