const Product = ({ product, onAddToCart }) => {
  return (
    <>   
    <div className="flex flex-wrap items-center justify-center text-black">
      <div className="flex-shrink-0 mx-4 mb-6 relative overflow-hidden rounded-md max-w-sm shadow-lg">
        <div className="relative flex items-center justify-center">     
          <img className="relative w-70" src={product.image.url} alt="shopping item"/>
        </div>
        <div className="relative px-6 pb-6 mt-6">
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">
              {product.name} <br/>
              {product.price.formatted_with_symbol}
            </span>
            <div className="mt-4">
              <button className="bg-pink-600 rounded-full text-xs font-bold px-6 py-2 text-white" onClick={() => onAddToCart(product.id, 1)}>
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product