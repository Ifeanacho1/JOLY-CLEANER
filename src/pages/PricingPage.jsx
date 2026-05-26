import React from 'react'
import "./pricing.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

const PricingPage = () => {
  return (
    <>
      <Header/>
      <section className='price-container'>
        <div className='pricing-text1'>
            <h3 className='pricing-text'>Some Clothings Prices</h3>
        </div>
        <article className='price-holder'>

            <article className='price-holder1'>
            <div className='price-hold'>
                <div className='texts'>
                    <p className='h5'>Mattress</p>
                </div>
                 <p className='h6'>$50</p> 
            </div>
            <div className='price-hold'>
                 <div className='texts'>
                    <p className='h5'>Suit / Coat</p>
                </div>
                 <p className='h6'>$100</p> 
            </div>
            </article>

            <article  className='price-holder1'>
                 <div className='price-hold1'>
                     <div className='texts'>
                    <p className='h5'>Jacket</p>
                </div>
                 <p className='h6'>$20</p> 
                 </div>
                  <div className='price-hold1'>
                     <div className='texts'>
                    <p className='h5'>Native Wear</p>
                </div>
                 <p className='h6'>$90</p> 
                  </div>
            </article>

             <article  className='price-holder1'>
                 <div className='price-hold1'>
                     <div className='texts'>
                    <p className='h5'>Shirt</p>
                </div>
                 <p className='h6'>$55</p> 
                 </div>
                  <div className='price-hold1'>
                     <div className='texts'>
                    <p className='h5'>Inner Wear</p>
                </div>
                 <p className='h6'>$20</p> 
                  </div>
            </article>

             <article  className='price-holder1'>
                 <div className='price-hold1'>
                     <div className='texts'>
                    <p className='h5'>Curtains</p>
                </div>
                 <p className='h6'>$130</p> 
                 </div>
                  <div className='price-hold1'>
                     <div className='texts'>
                    <p className='h5'>Ighab</p>
                </div>
                 <p className='h6'>$45</p> 
                  </div>
            </article>

             <article  className='price-holder1'>
                 <div className='price-hold1'>
                     <div className='texts'>
                    <p className='h5'>Wedding Dress</p>
                </div>
                 <p className='h6'>$50</p> 
                 </div>
                  <div className='price-hold1'>
                     <div className='texts'>
                    <p className='h5'>Pinnafor</p>
                </div>
                 <p className='h6'>$45</p> 
                  </div>
            </article>
        </article>
      </section>

     <section className='frame2'>
        <article className='frames'>
           <div className='para-holder'>
            <p className='paragraph'>Payment Options</p>
           </div>

           <div className='para-holder2'>
            <p className='paragraph2'>We accept cash, bank transfer, and <br />all major mobile payment platforms.</p>
           </div>
        </article>
         <article className='frames'>
             <div className='para-holder'>
            <p className='paragraph'>Commercial Rates</p>
           </div>

           <div className='para-holder2'>
            <p className='paragraph2'>Special bulk pricing available for <br /> hotels, restaurants, and businesses. <br /> Contact us for a quote.</p>
           </div>
         </article>
     </section>

     <section className='getStarted'>
        <article className='started'>
            <p className='started-text'>Ready to Get Started?</p>
        </article>
         <article className='started2'>
            <p className='started-text2'>Book your first pickup today and experience the Joly Cleaners difference</p>
        </article>
         <div className='btn-get'>
        <button className='started-btn'><b>Schedule Pickup</b></button>
        </div>
     </section>
      <Footer/>
    </>
  )
}

export default PricingPage
