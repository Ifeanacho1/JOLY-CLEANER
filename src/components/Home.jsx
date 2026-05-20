import React from 'react'
import Header from './Header'
import './Home.css'
import Smile from '../assets/Smiling Lady.jpg'

const Home = () => {
  return (
    <>
    <Header/>
      <main className='HomeSection1'>
        <h1 className='HomeSection1H1'>Clean Clothes, Zero Stress, </h1>
        <h2 className='HomeSection1H2'>Nigeria's Eco Friendly Dry Cleaners & Laundry Service</h2>
        <p className='HomeSection1P'>Place an Order, We Collect, Clean and deliver within 24 hours</p>
        <button className='HomeSection1Button'>Schedule Pickup</button>
      </main>
      <div className='HomeSection2'>
        <div className='HomeSection2DivLeft'>
            <h1 className='HomeSection2DivLeftH1'>About Joly Cleaners</h1>
            <p className='HomeSection2DivLeftP'>Joly Cleaners is a trusted laundry and dry cleaning
                <br />service dedicated to making life easier for individuals
                <br />and businesses. We provide reliable, eco-friendly, and
                <br />affordable cleaning solutions with convenient Pickup
                <br />and delivery.
            </p>
            <button className='HomeSection2DivLeftButton'>Read More</button>
        </div>
        <div className='HomeSection2DivRight'>
            <img src={Smile} alt="" className='HomeSection2DivRightImage'/>
        </div>
      </div>
    </>
  )
}

export default Home
