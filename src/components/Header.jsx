import React from 'react'
import './Header.css'
import Image from '../assets/Basket Logo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const Nav = useNavigate();
  return (
    <>
      <header className='HeaderContainer'>
        <div className='HeaderContainerLeft'>
            <img src={Image} alt="" className='Logo'/>
            <article className='LogoNameContainer'>
                <h1 className='LogoName'>JOLY</h1>
                <h2 className='LogoCleanerName'>Cleaners</h2>
            </article>
        </div>
        <div className='HeaderContainerCenter'>
            <h1 className='HeaderContainerCenterH1'onClick={() => Nav ('/')}>HOME</h1>
            <h2 className='HeaderContainerCenterH2'onClick={() => Nav ('/About')}>ABOUT</h2>
            <h3 className='HeaderContainerCenterH3'onClick={() => Nav ('/ServicePage')}>SERVICES</h3>
        </div>
        <div className='HeaderContainerRight'>
            <button className='HeaderContainerRightButton'>BOOK A PICKUP</button>
        </div>
      </header>
    </>
  )
}

export default Header
