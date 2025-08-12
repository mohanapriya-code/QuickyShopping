import React from 'react'
import { Link } from 'react-router'
import { AiOutlineClose } from 'react-icons/ai'
import { BiRightArrow } from 'react-icons/bi'
import './wishlist.css'
const WishList = ({viewList,setViewList,addToCart}) => {
   let remove=(product)=>{
         let exist=viewList.find((x)=>{
            return x.id===product.id
        })
        if(exist.qty>0){
        setViewList(viewList.filter((x)=>{
            return x.id!==product.id
        }))}
    }
  return (
    <>
    <h1 className='wish'>My Wishlists ❤</h1>

       {
    viewList.length===0 &&
      <div className='emptycart'>
        <div className='cartcontainer'>
            <h2>Oops! It's Empty</h2>
            <button><Link to='/product' className='link'>Go to Products<BiRightArrow/></Link></button>
        </div>
      </div> }

   <div className='wishproduct'>
        <div className='wishbox'>
          
            {
                viewList.map((curElm)=>{
                    return(
                        <div  className='wishcontent'  key={curElm.id}>
                            <AiOutlineClose className='closed' onClick={()=>remove(curElm)}/>
                         
                            <div className='wishimg-box'>
                                <img src={curElm.img} alt={curElm.Cat}/>
                            </div>
                            <div className='wishdetails'>
                                <h5>{curElm.Cat}</h5>
                                <h2>{curElm.title}</h2>
                               <div className='wishcount'> <span>MRP {curElm.price }</span>
                                <button className='wishicons' onClick={()=>addToCart(curElm)}>Add To Cart</button></div>
                              </div>
                    </div>
                    
                    )
                })
            }
        </div>
        </div>
    </>
  )
}

export default WishList