import React from 'react';
import './Jobs.css';

const Jobs = () => {
  return (
    <>
    <section className='areas_section'>
      {/* <div className='title_img'></div> */}
      <h2 className='areas_title'>- Practice Areas -</h2>
      <div className='areas'>
        <div className='areas_card'>
          <div className='areas_card-img'></div>
          <a href='./jobs/family'  className='areas_card-title'>Family Law</a>
          <p>We understand the emotional & financial turmoil involved with domestic relations. <br /> While we strive for peace and cooperation, we also aggressively protect our clients when necessary.</p>
        </div>
        <div className='areas_card'>
          <div className='areas_card-img2'></div>
            <a href='./jobs/divorce' className='areas_card-title'>Divorce LAW</a>
            <p>Our award-winning divorce team is known for getting results in and outside of the courtroom. We help smooth out the bumpy and complex road to a new chapter in your life.</p>
        </div>
        {/* <div className='areas_card'>
          <div className='areas_card-img'>
            <h3>Child Cusdoty</h3>
            <p></p>
          </div>
        </div> */}
        <div className='areas_card'>
          <div className='areas_card-img3'></div>
            <a href='./jobs/wrongful' className='areas_card-title'>Wrongful Death</a>
            <p>Goscha helps victims and their family members rebuild after a serious accident or injury. We have a team of lawyers with experience in and out of the courtrooms in Colorado to seek justice on your behalf.</p>
          </div>
        <div className='areas_card'>
          <div className='areas_card-img4'></div>
            <a href='./jobs/accident' className='areas_card-title'>Car Accidents</a>
            <p>You’re hurt. You’re angry. You’re concerned about medical bills. Car accidents, especially those in the mountains, come with a unique set of legal challenges. Find out how our team can help you tell your story and obtain justice.</p>
        </div>
        <div className='areas_card'>
          <div className='areas_card-img5'></div>
            <a href='./jobs/injury' className='areas_card-title'>Personal Injury</a> 
            <p>Goscha helps victims and their family members rebuild after a serious accident or injury. We have a team of lawyers with experience in and out of the courtrooms in the Central Rockies to seek justice on your behalf.</p>
        </div>
        <div className='areas_card'>
          <div className='areas_card-img6'></div>
            <a href='.jobs/criminal' className='areas_card-title'>Criminal Defense</a>
            <p>Goscha’s team is unparalleled in defending those charged with crimes in Colorado. Our reputation as skilled trial lawyers enables us to obtain favorable results during pre-trial negotiations.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Jobs