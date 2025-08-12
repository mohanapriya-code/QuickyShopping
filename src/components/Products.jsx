import React from "react";
import ProductDetails from "./ProductDetails";
import { AiOutlineClose, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import './product.css'

const Products = ({product,setProduct,detail,view,close,setClose,addToCart,viewProduct}) => {
   let filterproduct=(product)=>{
    const update = ProductDetails.filter((a)=>{
        return a.Cat===product
    })
    setProduct(update)
   }
   let AllProducts=()=>setProduct(ProductDetails)
 
  return (
    <>
      <div className="Products">
        <h1>Products</h1>
            <p>Home Products</p>
        <div className="container">
            
          <div className="filter">
            <div className="categories">
              <h2>Categories</h2>
              <ul>
                <li onClick={()=>{AllProducts()}}>All Products</li>

                <li onClick={()=>{filterproduct("smartphones")}}>SmartPhones</li>
                <li onClick={()=>{filterproduct("smartwatch")}}>SmartWatch</li>
                <li onClick={()=>{filterproduct("headphones")}}>HeadPhones</li>
                <li onClick={()=>{filterproduct("cpu")}}>CPU</li>
                <li onClick={()=>{filterproduct("tablets")}}>tablets</li>
                <li onClick={()=>{filterproduct("notes")}}>Notes</li>
              </ul>
            </div>
          </div>
     
          <div className="product">
            { close ?
                 <div className="product_box">
            <div className="product_container">
                
                {
                    detail.map((curElm)=>{
                        return(
                            <div className="detailproduct" key={curElm.id}>
                                     <button onClick={()=>{setClose(false)}}><AiOutlineClose/></button>
                                     <div className="img-box">
                            <img src={curElm.img} alt={curElm.Cat}/></div>
                            <div className="content1">
                            <h5>{curElm.Cat}</h5>
                            <h2>{curElm.title}</h2>
                            <h5>This is most lovable unique styled things</h5>
                            <p>MRP {curElm.price}</p>
                            <button className="add" onClick={()=>addToCart(curElm)}>Add to Cart</button></div>
                            </div>
                        )
                    })
                }
            </div>
            </div>:null}
            <div className="container1">
              {product.map((pro) => {
                return (
                  <>
                    <div className="box1" key={pro.id}>
                      <div className="img-box1">
                        <img src={pro.img} alt={pro.title} />
                        <div className="icon1">
                          <span >
                            <AiOutlineShoppingCart onClick={()=>addToCart(pro)} />
                          </span>
                          <span>
                            <BsEye  onClick={()=>{view(pro)}}/>
                          </span>
                          <span>
                            <AiOutlineHeart onClick={()=>viewProduct(pro)}/>
                          </span>
                        </div>
                      </div>
                      <div className="detail1">
                        <p>{pro.Cat}</p>
                        <h3>{pro.title}</h3>
                        <h4>MRP {pro.price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
