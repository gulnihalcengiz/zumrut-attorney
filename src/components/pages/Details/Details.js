import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blog } from '../Blogs/Data';
import './Details.css';

const Details = () => {
    const {id} = useParams()
    const [blogs,setBlogs] = useState(null)

    useEffect(() =>{
        let blogs = blog.find((blogs) => blogs.id === parseInt(id))

        if(blogs){
            setBlogs(blogs)
        }
    },[])
  return (
    <>
    {blogs ? (

    <section className='single_post'>
        <div className='container'>
            <div className='left'>
                <img src={blogs.cover} />
            </div>
            <div className='right'>
                {/* <div className='buttons'>
                    <button className='button'>
                        <BsPencilSquare />
                    </button>
                </div> */}
                <h1>{blogs.title}</h1>
                <p>{blogs.desc}</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
           </div>
        </div>
    </section>
    ) :null}
    </>
  )
}

export default Details;