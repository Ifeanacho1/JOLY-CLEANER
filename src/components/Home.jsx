import React from 'react'
import Header from './Header'
import './Home.css'
import Smile from '../assets/Smiling Lady.jpg'
import FoldedClothes from '../assets/Folded Clothes on white background.png'
import Arrow from '../assets/Arrow.png'
import Phone from '../assets/Phone.png'
import WMachine from '../assets/Washing Machine.png'
import DTruck from '../assets/Delivery Truck.png'
import Wash from '../assets/Frame 107.png'
import Dry from '../assets/secound.png'
import Iron from '../assets/third.png'
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import Steve from '../assets/Steve Benson.jpg'
import Michael from '../assets/Michael Jonathan.jpg'
import Sarah from '../assets/Sarah Mark.jpg'
import Star from '../assets/Star.png'
import Footer from './Footer'

const Home = () => {
    const Nav = useNavigate();
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

      <div className='HomeSection5'>
        <h1 className='HomeSection5H1'>Pick Up & Delivery</h1>
        <p className='HomeSection5P'>If you can't get to our cleaning facility then we offer a pick and delivery service, simply</p>
        <p className='HomeSection5P'>telephone us on 090 6000 7431 arrange pick up or order online by clicking the <span className='HomeSection5PSpan'>"book</span></p>
        <p className='HomeSection5P'><span className='HomeSection5PSpan'>now"</span> button</p>
        <article className='HomeSection5Article'>
            <div className='HomeSection5ArticleCont1'>
                <img src={Phone} alt="" className='HomeSection5ArticleCont1Phone'/>
                <h1 className='HomeSection5ArticleCont1H1'>You Order</h1>
            </div>
            <div className='HomeSection5ArticleCont2'>
                <img src={Arrow} alt="" className='HomeSection5ArticleArrow1'/>
            </div>
            <div className='HomeSection5ArticleCont3'>
                <img src={WMachine} alt="" className='HomeSection5ArticleCont3WMachine'/>
                <h1 className='HomeSection5ArticleCont3H1'>We Collect & Clean</h1>
            </div>
            <div className='HomeSection5ArticleCont4'>
                <img src={Arrow} alt="" className='HomeSection5ArticleArrow2'/>
            </div>
            <div className='HomeSection5ArticleCont5'>
                <img src={DTruck} alt="" className='HomeSection5ArticleCont5DTruck'/>
                <h1 className='HomeSection5ArticleCont5H1'>We Deliver</h1>
            </div>
        </article>
      </div>

      <div className='HomeSection6'>
        <h1 className='HomeSection6H1'>Our Services</h1>
        <article className='HomeSection6Article'>
            <div className='HomeSection6ArticleDiv1'>
                <img src={Wash} alt="" className='Wash'/>
                <h1 className='WashFold'>Wash & Fold</h1>
                <p className='WashFoldP'>Everyday Laundry washed,
                    <br />dried, and neatly folded.
                </p>
            </div>
            <div className='HomeSection6ArticleDiv2'>
                <img src={Dry} alt="" className='Dry'/>
                <h1 className='DryCleaning'>Dry Cleaning</h1>
                <p className='DryCleaningP'>Special care for delicate
                    <br />fabrics and formal wear.
                </p>
            </div>
            <div className='HomeSection6ArticleDiv3'>
                <img src={Iron} alt="" className='Iron'/>
                <h1 className='Ironing'>Ironing Service</h1>
                <p className='IroningP'>Wrinkle-free clothes ready to
                    <br />wear.
                </p>
            </div>
        </article>
        <h2 className='HomeSection6H2'onClick={() => Nav ('/Hero')}>See more
            <FaChevronRight />
        </h2>
      </div>

      <div className='HomeSection7'>
        <p className='HomeSection7P1'>What our <span className='P1Span'>Customers</span> say</p>
        <article className='HomeSection7Article'>
            <div className='HomeSection7ArticleDiv1'>
                <section className='HomeSection7ArticleDiv1Section'>
                    <img src={Steve} alt="" className='SteveImage'/>
                    <img src={Star} alt="" className='SteveStar'/>
                    <img src={Star} alt="" className='SteveStar'/>
                    <img src={Star} alt="" className='SteveStar'/>
                    <img src={Star} alt="" className='SteveStar'/>
                    <img src={Star} alt="" className='SteveStar'/>
                </section>
                <p className='HomeSection7ArticleDiv1P'>Very user-friendly and Price reasonable</p>
                <h1 className='Steve'>~Steve Benson</h1>
            </div>
            <div className='HomeSection7ArticleDiv2'>
                <section className='HomeSection7ArticleDiv2Section'>
                    <img src={Michael} alt="" className='MichaelImage'/>
                    <img src={Star} alt="" className='MichaelStar'/>
                    <img src={Star} alt="" className='MichaelStar'/>
                    <img src={Star} alt="" className='MichaelStar'/>
                    <img src={Star} alt="" className='MichaelStar'/>
                    <img src={Star} alt="" className='MichaelStar'/>
                </section>
                <p className='HomeSection7ArticleDiv2P'>Always Very timely and efficient!</p>
                <h1 className='Michael'>~Michael Jonathan</h1>
            </div>
            <div className='HomeSection7ArticleDiv3'>
                <section className='HomeSection7ArticleDiv3Section'>
                    <img src={Sarah} alt="" className='SarahImage'/>
                    <img src={Star} alt="" className='SarahStar'/>
                    <img src={Star} alt="" className='SarahStar'/>
                    <img src={Star} alt="" className='SarahStar'/>
                    <img src={Star} alt="" className='SarahStar'/>
                    <img src={Star} alt="" className='SarahStar'/>
                </section>
                <p className='HomeSection7ArticleDiv3P'>Joly Cleaners saved me hours last week</p>
                <h1 className='Sarah'>~Sarah Mark</h1>
            </div>
        </article>
        <p className='HomeSection7P2'>Trusted by <span className='P2Span'>2000+</span> happy customers</p>
      </div>
      <Footer/>
    </>
  )
}

export default Home
