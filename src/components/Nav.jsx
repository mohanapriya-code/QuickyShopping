import {FaTruckMoving} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsBagCheck} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import {CiLogin} from 'react-icons/ci'
import {CiLogout} from 'react-icons/ci'
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';

import './Nav.css'
const Nav = ({searchbtn}) => {
   
    let[search,setsearch]=useState()
      const { loginWithRedirect ,logout,user,isAuthenticated} = useAuth0();
     
  return (
    <>
    {/* <div className='free'>
        <div className='icon'><FaTruckMoving/></div>
        <p>FREE Shipping When Shopping upto $1000</p>
    </div> */}
    <div className='main_header'>
        <div className='container'>
            <div className='logo'>
                <img src='/logo.png' alt='logo img'></img>
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Enter The Product Name' autoComplete='off' onChange={(e)=>{ setsearch(e.target.value)}}></input>
                <button onClick={()=>{searchbtn(search)}}>Search</button>
            </div>
            <div className='icon'>
                {
                    isAuthenticated && (
                    <div className='account'>
                    <div className='user_icon'>
                        <AiOutlineUser/>
                    </div>
                    <p>Hello {user.name}</p>
                </div>
                    )
                }
                
                 <Link to='/Wishlist' className='link' id='link1'> <AiOutlineHeart/></Link>
            <Link to='/cart' className='link'><BsBagCheck/></Link>
            </div>
          
        </div>
    </div>
    <div className='header'>
        <div className='container'>
            <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/product'  className='link'>Products</Link>
                </li>
                <li>
                    <Link to='/about'  className='link'>About</Link>
                </li>
                <li>
                    <Link to='/contact'  className='link'>Contact</Link>
                </li>
            </ul>
        </div>
        <div className='auth'>
            {
                isAuthenticated ?  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button> 
           : <button  onClick={() => loginWithRedirect()}><CiLogin/></button>
            
            }
          
        </div>
    </div>
    </>
  )
}

export default Nav