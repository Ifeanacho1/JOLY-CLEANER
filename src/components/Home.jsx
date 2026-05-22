import React from 'react'
import Header from './Header'
import './Home.css'
import Smile from '../assets/Smiling Lady.jpg'
import FoldedClothes from '../assets/Folded Clothes on white background.png'

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

      <div className='HomeSection3'>
        <div className="carousel-container">
            <button className="arrow prev-btn">&#10094;</button>
            <button className="arrow next-btn">&#10095;</button>

            <div class="carousel-track">
                <div className="carousel-card"><img src="" alt="Folded clothes"/></div>
                <div className="carousel-card"><img src="" alt="Folded shirts"/></div>
                <div className="carousel-card"><img src="" alt="Laundry stacks"/></div>
                <div className="carousel-card"><img src="" alt="Washing area"/></div>
            </div>
        </div>
      </div>

      <div className='HomeSection4'>
        <h1 className='HomeSection4H1'>Why Choose Us?</h1>
        <div className='HomeSection4Div'>
            <img src={FoldedClothes} alt="" className='HomeSection4Img'/>
            <aside className='HomeSection4Aside'>
                <ul className='HomeSection4Ul'>
                    <input type="checkbox" className='HomeSection4AsideInput'/>
                    <li className='HomeSection4AsideLi'>Free Pickup & Delivery</li>
                </ul>
                <ul className='HomeSection4Ul'>
                    <input type="checkbox" className='HomeSection4AsideInput'/>
                    <li className='HomeSection4AsideLi'>24-hour Turnaround</li>
                </ul>
                <ul className='HomeSection4Ul'>
                    <input type="checkbox" className='HomeSection4AsideInput'/>
                    <li className='HomeSection4AsideLi'>Affordable Pricing</li>
                </ul>
                <ul className='HomeSection4Ul'>
                    <input type="checkbox" className='HomeSection4AsideInput'/>
                    <li className='HomeSection4AsideLi'>100% Satisfaction Guaranteed</li>
                </ul>
            </aside>
        </div>
      </div>
    </>
  )
}

export default Home
