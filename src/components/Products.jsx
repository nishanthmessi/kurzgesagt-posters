import Product from "./Product"
import Hero from './Hero'
import Footer from './Footer'

const Products = ({ products, onAddToCart }) => {
  return (
    <>
      <Hero/>
      <div className='flex flex-wrap items-center justify-center mt-10 max-w-screen-xl m-auto'>
        {products.map((product) => (
           <Product key={product.id} product={product} onAddToCart={onAddToCart}/>
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default Products