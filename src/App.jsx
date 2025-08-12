import './index.css'
import Nav from './components/Nav'
import { BrowserRouter} from 'react-router'
import Rout from './components/Rout'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function App() {
  let[product,setProduct]=useState(ProductDetails)
  let [detail, setDetail]=useState([])
  let [close, setClose]=useState(true)
  let [cart,setCart]=useState([])
  let [viewList,setViewList]=useState([])
  let [buy,setBuy]=useState([])
  let navigate=useNavigate()
  let searchbtn=(product)=>{
    
      let change=ProductDetails.filter((a)=>{
        return  a.Cat===product
      })
      setProduct(change)
      navigate("./product")
  }
  let view=(product)=>{
      setDetail([{...product}])
      setClose(true)
  }
  const addToCart = (product) => {
  const exists = cart.find((x) => x.id === product.id);

  if (exists) {
    alert("Already Added!");
  } else {
    setCart([...cart, { ...product,qty:1 }]);
    alert("Successfully added!");
  }
};
 const viewProduct=(product)=>{
     const exists = viewList.find((x) => x.id === product.id);

  if (exists) {
    alert("Already Added!");
  } else {
    setViewList([...viewList, { ...product,qty:1}]);
    alert("Successfully added!");
  }
 }
let buyProduct=(product)=>{
  const exist=buy.find((x)=> x.id===product.id)
   if (exist) {
    alert("Already Added to invoice")
  } else {
    setBuy([...buy, { ...product,qty:1}]);
   navigate('/buy')
  }
}

  return (
   <>
   
   <Nav searchbtn={searchbtn}/>
   <Rout  product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addToCart={addToCart} viewProduct={viewProduct}
    viewList={viewList} setViewList={setViewList} buyProduct={buyProduct} buy={buy} setBuy={setBuy}/>
   <Footer/>
   
   </>
  )
}

export default App
