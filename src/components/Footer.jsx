import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoYoutube } from 'react-icons/bi'
import { BiLogoInstagram } from 'react-icons/bi'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='container'>
        <div className='about'>
          <div className='logo'>
            <img src="./logo.png"></img>
          </div>
          <div className='details'>
            <p>We are providing greate service for our client</p>
            <div className='icon'>
              <ul>
                <li>  <BiLogoFacebook/></li>
                <li>  <BiLogoInstagram/></li>
                <li><AiOutlineTwitter/></li>
                <li><BiLogoYoutube/></li>
              </ul>  
            </div>
          </div>
        </div>
        <div className='account'>
          <h2>My Acoount</h2>
          <u>
            <li>Account</li>
            <li>Order</li>
            <li>Cart</li>
            <li>Shipping</li>
            <li>Return</li>
          </u>
        </div>
        <div className='page'>
          <h2>Pages</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
      </div>
     
    </div>
     <h5 style={{textAlign:"center"}}>© copy Rights-2025.Designed by Mohanapriya</h5>
    </>
  )
}

export default Footer