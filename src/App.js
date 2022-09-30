import { commerce } from "./lib/commerce"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Checkout from "./pages/Checkout"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const {data} = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }

  const handleAddCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity)
    setCart(cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity})
    setCart(cart) 
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId)
    setCart(cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <>
      <Router>
        <Navbar totalItems={cart.total_items} 
          cart={cart} 
          handleUpdateCartQty={handleUpdateCartQty} 
          handleRemoveFromCart={handleRemoveFromCart} />
        <Routes>
          <Route path="/" element={<Products products={products} onAddToCart={handleAddCart}/>}/>
          <Route path="/checkout" element={<Checkout cart={cart}/>}/>
        </Routes>
      </Router>
    </>  
  )
}

export default App
