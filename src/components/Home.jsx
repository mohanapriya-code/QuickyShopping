import React from "react";
import { Link } from "react-router";
import { BsArrowRight, BsEye } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";
import "./Home.css";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { useState } from "react";
import ProductList from "./ProductList";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
const Home = ({addToCart,viewProduct}) => {
    let [Product,setProduct]=useState(ProductList);
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="details">
            <h2> The Stylish Bags Collection upto 40% OFF</h2>
            <Link to="/product" className="link">
              Shop Now
              <BsArrowRight />
            </Link>
          </div>
          <img src="./images/slider2.png" alt="Sliderimage"></img>
        </div>
      </div>
      <div className="product-type">
        <div className="container">
          <div className="box">
            <div className="img-box">
              <img src="./images/smartphone.png" alt="smartPhone"></img>
            </div>
            <div classname="detail">
              <p>32 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./images/smartwatch.png" alt="smart watch"></img>
            </div>
            <div classname="detail">
              <p>50 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./images/headphone.png" alt="headPhone"></img>
            </div>
            <div classname="detail">
              <p>18 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./images/cpu.png" alt="cpu"></img>
            </div>
            <div classname="detail">
              <p>12 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
            <div className="box">
                <div className="icon"><FiTruck/></div>
                <div className="detail"><h3>FREE Shipping</h3><p>Order above $1000</p></div>
            </div>
             <div className="box">
                <div className="icon"><BsCurrencyDollar/></div>
                <div className="detail"><h3>Refund & Return</h3><p>Money Back Gaurenty</p></div>
            </div>
             <div className="box">
                <div className="icon"><HiOutlineReceiptPercent/></div>
                <div className="detail"><h3>Member Discountg</h3><p>On Every Order</p></div>
            </div>
             <div className="box">
                <div className="icon"><BiHeadphone/></div>
                <div className="detail"><h3>Customer Support</h3><p>24/7</p></div>
            </div>
        </div>
      </div>
      <div className="product">
        <h1>Top Products</h1>
        <div className="container">
            
           {
            Product.map((pro)=>{
                return(<>
              <div className="box" key={pro.id}>
                <div className="img-box">
                <img src={pro.img} alt={pro.title}/>
                <div className="icon"><span><AiOutlineShoppingCart onClick={()=>addToCart(pro)}/></span>
                <span><Link to='/product' className="link" style={{color:"crimson"}}><BsEye/></Link></span>
                <span><AiOutlineHeart onClick={()=>viewProduct(pro)}/></span></div>
                </div>
                <div className="detail">
                    <p>{pro.Cat}</p>
                    <h3>{pro.title}</h3>
                    <h4>MRP {pro.price}</h4>
                </div>
                </div>
                </>
                )
            })
           }
        </div>
      </div>
      <div className="bottom_banner">
        <div className="container">
            <div className="img-box">
                <img src="./images/bottombanner.png" alt=" bannerimg"></img>
            </div>
            <div className="details">
                <h5>LATEST TECHNOLOGY ADDED</h5>
                <h2>Apple iPad 11th generation, A16-2025</h2>
                <p>MRP 98000</p>
                <Link to='/product' className="link">Shop Now<BsArrowRight/></Link>
            </div>
        </div>
        </div>
    </>
  );
};

export default Home;
