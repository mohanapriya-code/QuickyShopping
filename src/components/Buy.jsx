import React from 'react'
import { BiPlus } from 'react-icons/bi'
import './Buy.css'
import { useState } from 'react'


const Buy = ({buy,setBuy}) => {
  let[address,setAddress]=useState('')
  let[qty,setQty]=useState(1)
  
  return (
    <>
    {
        buy.map((product)=>{
            return(
                <>
                 <div className='buybox'>
                   <form
          action="https://api.web3forms.com/submit"
          method="POST"
          class="contact-form"
        >
          <input
            type="hidden"
            name="access_key"
            value="0fee022a-f65c-448a-b83f-12380b2b345f"
          />
                  <div className='buycontainer'>
                    <h3>{product.title}</h3>
                    <input type='number' name='qty' placeholder='1' className='qty' value={qty} onChange={(e)=>setQty(e.target.value)}/><label className='qty'>Qty</label> 
                    <div className='buyaddress'>
                      <p> Enter Address</p>
                      <div className='addcontent'>
                        <input type='text' name='address' placeholder='EnterAddress' value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                       
                      </div>
                    </div>
                    <div className='payment'>
                      <h2>Payments</h2>
                      <div className='paymentoption'>
                        <input type='radio' name='payment' value={''}/><label>G-Pay</label><br/><br/>
                        <input type='radio' name='payment' value={''}/><label>Paytm</label><br/><br/>
                        <input type='radio' name='payment' value={''}/><label>PhonePay</label><br/><br/>
                        <input type='radio' name='payment' value={''}/><label>Cash On Delivery</label>
               
                      </div>
                    </div>
                    <div className='buydata'>
                      <p>Product Price  <span>{product.price*qty}</span></p>
                      <p>GST            <span>{(product.price *qty) * 3 / 100}</span></p>
                      <p>Delivery Fee   <span>{(product.price *qty)*2/100}</span></p>
                      <h4>Total Bill Amount<span>   {(product.price * 3/100)+(product.price *1 / 100-100)+(product.price)}</span></h4>
                       <button type='submit'>Confirm Order</button>
                    </div>
                  </div></form>
                  
                 </div>
                </>
            )
        })
    }
    </>
  )
}

export default Buy