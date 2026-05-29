import React from 'react'
import Header from '../components/Header'
import"./About.css"


const About = () => {
  return (
    <div >
      <Header />
      <div className='wrapper'>
  
        <div className='laundryHolder'>
       <p className='laundrytext'>Commercial Dry Cleaning & Domestic Laundry</p>
       <p>Dry cleaning and laundry services for private customers AND businesses<hr /></p>
      </div>

        <div className='laundryContainer'>
         <section className='laundryWrapper'>
        <p className='text' >Looking for a credible commercial laundry ?</p>
        <p>If you are looking for a commercial laundry to  
        handle your linen and work-wear  
        requirementsfor your hotel and hospital or 
         organisation you are at the right place.</p>
        </section>
        <section>
         <p>Joly cleaners is the leading online laundry and dry cleaning <br /> 
         services in nigeria, offering unparalleled levels of quality cleaning <br />
          right across lagos. our 5-star laundry services replaces the neeed <br />
           for using your local launderer or dry cleanerand offers a quick and <br />
          convienient pick-up service direct from your home.you can also <br />
           place your order online through our website. 
          </p>
          </section>
         </div>

        <div className='storyContainer'>
          <img src="src/assets/Frame 107.png" alt="" />
         <section>
        <p className='storyHeading'>Our Story</p>
        <p>foundeed with the goal of simplifying everyday laundry.Joly cleaner started as a small local service
          and has grown into one of nigeria's trusted cleaning providers
        </p>
        <p>we combine modern laundry technology with eco-friendly cleaning methods to ensure your clothes recieve the best care while protecting the environment
        </p>
       </section>
     </div>

     <div className='detailHolder'>
      <p className='detailWrapper'>Our mission, Vison, & Values</p>
      <div className='detailContainer'>
       <div className='Container'>
        <img src="" alt="" />
        <p className='logo'>Our mission</p>
        <p>To provide convienient, affordableand high quality laundry services that saves our customer time and effort</p>
      </div>
    

      <div className='Container'>
        <img src="" alt="" />
        <p className='logo'>Our vision</p>
        <p>to become the most trusted laundry and dry-cleaning service
          provider in nigeria
        </p>
      </div>

  <div className='Container'>
        <img src="" alt="" />
        <p className='logo'>Our values</p>
        <ul>
          <span>
            <input type="checkbox" name="" id="" />
          <li>Quality</li>
          </span>
          <span>
          <input type="checkbox" name="" id="" />
          <li>Reliability</li>
          </span>
          <span>
          <input type="checkbox" name="" id="" />
          <li>customer satisfaction</li>
          </span>
          <span>
          <input type="checkbox" name="" id="" />
          <li>eco-friendly cleaning</li>
          </span>
        </ul>
      </div>
     </div>
     </div>
     <div className='footer'>
      <p className='logoHolder'>Ready for stress free laundry ?</p>
      <p>let aqua cleaners handle your laundry while you focus on what matter</p>
      <button className='scheduleButton'>Schedule pickup</button>
     </div>
    </div>
    </div>
  )
}

export default About
