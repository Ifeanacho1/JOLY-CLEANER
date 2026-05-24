import React from 'react'
import './Footer.css'
import { FaRegCopyright } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    const Nav = useNavigate();
  return (
    <>
      <footer className='Footer'>
        <section className='FooterSection1'>
            <div className='FooterCont1'>
                <h1 className='FooterCont1H1'>JOLY</h1>
                <h2 className='FooterCont1H2'>Cleaners</h2>
                <p className='FooterCont1P'>Stay Clean, Stay Fresh,
                    <br />Stay Healthy
                </p>
                <article className='FooterCont1Article'>
                    <FaFacebook className='FooterCont1ArticleFB'/>
                    <FaInstagram className='FooterCont1ArticleIG'/>
                    <FaXTwitter className='FooterCont1ArticleX'/>
                    <FaLinkedin className='FooterCont1ArticleIN'/>
                </article>
            </div>
            <div className='FooterCont2'>
                <h1 className='FooterCont2H1'>Pages</h1>
                <p className='FooterCont2P' onClick={() => Nav ('/')}>Home</p>
                <p className='FooterCont2P' onClick={() => Nav ('/About')}>About</p>
                <p className='FooterCont2P' onClick={() => Nav ('/Hero')}>Services</p>
            </div>
            <div className='FooterCont3'>
                <p className='FooterCont3H1'>About</p>
                <p className='FooterCont3P'>Privacy Policy</p>
                <p className='FooterCont3P'>Licence and Terms</p>
                <p className='FooterCont3P'>Support</p>
            </div>
            <div className='FooterCont4'>
                <h1 className='FooterCont4H1'>Contact</h1>
                <p className='FooterCont4P1'><MdOutlineCall className='FooterCont4P1Icon'/> 07047180205, 08023012891</p>
                <p className='FooterCont4P2'><MdMailOutline className='FooterCont4P2Icon'/>bchi4433@gmail.com</p>
                <p className='FooterCont4P3'><FaLocationDot className='FooterCont4P3Icon'/>No 4b Beasin Road, off Karoly Street 
                <br />Aremu, Opp Int.Business School. Aja,
                <br />Oshodi, Lagos
                </p>
            </div>
        </section>
        <section className='FooterSection2'>
            <FaRegCopyright className='FooterSection2Icon'/>
            <h1 className='FooterSection2H1'>2026</h1>
            <p className='FooterSection2P'>Joly Cleaners. All rights reserved</p>
        </section>
      </footer>
    </>
  )
}

export default Footer
