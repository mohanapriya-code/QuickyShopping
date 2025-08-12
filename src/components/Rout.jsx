import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Cart from './cart'
import WishList from './WishList'
import Buy from './Buy'
import About from '../About'
import Contact from '../Contact'

const Rout = ({product,setProduct,detail,view,close, setClose,cart,setCart,addToCart,viewProduct,viewList ,setViewList,buy,setBuy,buyProduct}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home addToCart={addToCart} viewProduct={viewProduct} />}/>
       <Route path='/product' element={<Products  product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} viewProduct={viewProduct}/>}></Route>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} buyProduct={buyProduct} /> } />
      <Route path='/wishlist' element={<WishList  viewList={viewList} setViewList={setViewList} addToCart={addToCart} />}/>
      <Route path='/buy' element={<Buy buy={buy} setBuy={setBuy}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default Rout