import { useState} from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'react-feather'
import Cart from './Cart'

const Navbar = ({ totalItems, cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const [isShown, setIsShown] = useState(false)

  const handleClick = () => {
    setIsShown(current => !current)
  }

  return (
    <>
      <header className="header sticky top-0 bg-slate-900 shadow-md flex items-center justify-between px-8 py-4 text-white z-10">
        <div className="flex justify-start gap-6">
          <button href="">
            <Link to='/'>
              <img src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/logo.gif?v=1613717913' alt='logo'/>
            </Link>
          </button>
          <h1 className="text-xl font-bold mt-2 text-center">
            <Link to='/'>kurzgesagt Posters</Link>
          </h1>
        </div> 
        <div className="w-3/12 flex justify-end">
          <button onClick={handleClick}>
            <div className={totalItems > 0 ? '' : 'hidden'}>
              <span className="flex absolute -mt-1 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </div>
            <ShoppingCart className='hover:text-gray-300'/>
            {isShown && 
              <Cart cart={cart} 
                handleUpdateCartQty={handleUpdateCartQty} 
                handleRemoveFromCart={handleRemoveFromCart} 
                handleEmptyCart={handleEmptyCart}
              />}
          </button>
          
        </div>
      </header>
    </>
  )
}

export default Navbar