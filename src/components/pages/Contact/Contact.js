
import React, { useRef }from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";


const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_xvrlwto', 
        'template_qqr4vic', 
        form.current, 
        'TnoMuuuw6TJlcApWw'
        )
      .then(
        (result) => {
            console.log(result.text);
        },
        (error) => {
            console.log(error.text);
        }
      );
};

  return (
    <section className="contact_section" id="contact">
        
        {/* <div className='title_img'></div> */}
        <h2 className="section_title">- CONTACT -</h2> 
        
        {/* <span className="section_subtitle">7 / 24</span> */}

        <div className="contact_container container grid">
            <div className="contact_content">
                {/* <h3 className="contact_title">benimle konuşun</h3> */}

                <ul className="contact_info">

                    <li className="contact_card">
                    <i className="fa-solid fa-envelope contact_card-icon"></i>

                            <h3 className="contact_card-title">- email -</h3>
                                <a href="https://zumrutlaw@gmail.com" className="contact_button">
                                    <span className="contact_card-data">zumrutlaw<br/> @gmail.com</span>
                                    {/* <i className="fa-solid fa-arrow-right contact_button-icon"></i> */}
                                </a>
                    </li>

                    <li className="contact_card">
                        <i className="fa-brands fa-whatsapp contact_card-icon"></i>

                            <h3 className="contact_card-title">- whatsapp -</h3>    
                                <a href="" className="contact_button">
                                    <span className="contact_card-data">999-888-777</span>    
                                </a>
                    </li> 

                     <li className="contact_card">
                        <i className="fa-brands fa-facebook contact_card-icon"></i>

                            <h3 className="contact_card-title">- messenger -</h3>
                                <a href="" className="contact_button">
                                    <span className="contact_card-data">zumrut-law <br/> official</span>
                                </a>
                    </li> 

                    <li className="contact_card">
                        <i className="fa-brands fa-instagram contact_card-icon"></i>

                            <h3 className="contact_card-title">- instagram -</h3>
                                <a href="" className="contact_button">
                                    <span className="contact_card-data">zumrut-law <br/> offcl</span>
                                </a>
                    </li> 
                  
                </ul>
            </div>
        </div>

        <div className="contact_container container grid">
            <div className="contact_content">
                {/* <h3 className="contact_title2">About the Case</h3> */}

                <form ref={form} onSubmit={sendEmail} className="contact_form">
                    <div className="contact_form-div">
                        <label className="contact_form-tag">name-surname</label>
                        <input type="text" name='name' className='contact_form-input' placeholder='name-surname'/>
                    </div>

                    <div className="contact_form-div">
                        <label className="contact_form-tag">email</label>
                        <input type="email" name='email' className='contact_form-input' placeholder='email'/>
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <label className="contact_form-tag">about the case</label>
                        <textarea name="project" cols="30" rows="10" className='contact_form-input' placeholder=''></textarea>
                    </div>

                    <button className="button">
                    submit

                        <svg
                  className="button_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="rgb(255, 255, 255)"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="rgb(255, 255, 255)"
                  ></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact;