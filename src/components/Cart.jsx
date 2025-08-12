
import { BiRightArrow } from 'react-icons/bi'
import './cart.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Cart = ({cart,setCart,buyProduct}) => {
     
    let incqty=(product)=>{
        let exist=cart.find((x)=>{
            return x.id===product.id
        })
        setCart(cart.map((curElm)=>{
         return curElm.id===product.id ? {...exist, qty: exist.qty+1}: curElm
        }))
    }
    let decqty=(product)=>{
        let exist=cart.find((x)=>{
            return x.id===product.id
        })
        setCart(cart.map((curElm)=>{
         return curElm.id===product.id ? {...exist, qty: exist.qty-1}: curElm
        }))
    }
    let remove=(product)=>{
         let exist=cart.find((x)=>{
            return x.id===product.id
        })
        if(exist.qty>0){
        setCart(cart.filter((x)=>{
            return x.id!==product.id
        }))}
    }
    const totalPrice=cart.reduce((price,item)=>{
       return  price + item.qty * item.price
},0)

  return (
   <>
   {
    cart.length===0 &&
      <div className='emptycart'>
        <div className='cartcontainer'>
            <h2>Cart Is Empty</h2>
            <button><Link to='/product' className='link'>ShopNow<BiRightArrow/></Link></button>
        </div>
      </div> }
   
   <div className='cartproduct'>
        <div className='box'>
            {
                cart.map((curElm)=>{
                    return(
                        <div  className='content'  key={curElm.id}>
                            <AiOutlineClose className='closed' onClick={()=>remove(curElm)}/>
                         
                            <div className='img-box'>
                                <img src={curElm.img} alt={curElm.Cat}/>
                            </div>
                            <div className='cartdetails'>
                                <h5>{curElm.Cat}</h5>
                                <h2>{curElm.title}</h2>
                               <div className='count'> <p>MRP {curElm.price * curElm.qty}</p>
                                <p className='icons'><FaPlus onClick={()=>incqty(curElm)}/>{curElm.qty}<FaMinus onClick={()=>decqty(curElm)}/></p></div>
                              </div>
                                <button className='buynowbtn' onClick={()=>buyProduct(curElm)}>BUY NOW</button>

                    </div>
                    
                    )
                })
            }
        </div>

   </div>
          <h2>Total Price:{totalPrice}</h2>
    
   </>  
  )
}

export default Cart