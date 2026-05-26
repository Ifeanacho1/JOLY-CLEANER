import React from 'react'
import "./Hero.css"
import frame from "../assets/Frame 99.png"
import OurService from './OurService'
import Header from './Header'
import PricingPage from '../pages/PricingPage'
import { useNavigate } from "react-router-dom";
const Hero = () => {
   const navigate = useNavigate();
  return (
    <>
    <Header/>
      <section className='service_layout'>
      <article className='service_left'>
        <div className='hero_info'>
            <h3 className='lundry'> Our Laundry Service</h3>
            <p>Professional Laundry Care designed to save you <br />
            time and keep your clothes clean.</p>
            <div className='hero-btn'>
            <button className='service-btn'>Schedule Pickup</button>
            <button className='service-btn2' onClick={() => navigate(`/price`)}>View Pricing</button></div>
        </div>
        </article> 
        <article className='service_right'>
            <img src={frame} alt="" />
            </article>     
      </section>
    </>
  )
}

export default Hero
