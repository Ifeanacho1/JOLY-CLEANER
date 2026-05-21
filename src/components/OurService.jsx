import "./OurService.css"
import first from "../assets/Frame 107.png"
import secound from "../assets/secound.png"
import third from "../assets/third.png"
import forth from "../assets/forth.png"
import fifth from "../assets/fifth.png"
import sixth from "../assets/sixth.png"
const OurService = () => {
  return (
    <>
    <section className='our-service'>
        <div className="service-holder">
        <p className='text'>Our Services</p> 
        <section className="layout-2">
        <div className="holder-top">
            <article className="box">
                <img src={first} alt="" />
                <div className="text-contaier">
                    <div className="text-hold">
                        <h5>Wash & Fold</h5>
                        <p className="wash">Everyday Laundry washed, <br />
dried, and neatly folded.</p>
                    </div>
                </div>
            </article>
            <article className="box">
                <img src={secound} alt="" />
                <div className="text-contaier">
                    <div className="text-hold">
                        <h5>Dry Cleaning</h5>
                        <p className="wash">Special care for delicate <br />fabrics and formal wear.</p>
                    </div>
                </div>
            </article>
             <article className="box">
                <img src={third} alt="" />
                <div className="text-contaier">
                    <div className="text-hold">
                        <h5>Ironing Service</h5>
                        <p className="wash">Wrinkle-free clothes ready to <br /> wear.</p>
                    </div>
                </div>
            </article>
        </div>
        <div className="holder-down">
             <article className="box">
                <img src={forth} alt="" />
                <div className="text-contaier">
                    <div className="text-hold">
                        <h5>Pickup & Delivery</h5>
                        <p className="wash">Schedule laundry pickup and <br />we'll deliver it fresh and clean.</p>
                    </div>
                </div>  
            </article>
            <article className="box">
                <img src={fifth} alt="" />
                <div className="text-contaier">
                    <div className="text-hold">
                        <h5>Dry Cleaning</h5>
                        <p className="wash">Reliable laundry services for <br />hotels, restaurants and <br />businesses.</p>
                    </div>
                </div>
            </article>
             <article className="box">
                <img src={sixth} alt="" />
                <div className="text-contaier">
                    <div className="text-hold">
                        <h5>Deep Fabric Care</h5>
                        <p className="wash">Special cleaning for duvets,<br /> curtains,blankets and large <br /> fabrics.</p>
                    </div>
                </div>
            </article>
        </div>
        </section>
        </div> 
    </section>
    <footer>
        <article className="fotter">
            <h4>Ready for Fresh, Clean Clothes?</h4>
            <p className="book">Book your laundry pickup today and let us <b>handle</b> the rest.</p>
        </article>
    </footer>
    
    </>
  )
}

export default OurService
