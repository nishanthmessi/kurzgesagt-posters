const Review = ({ product }) => {

  console.log(product)
  return (
    <>
    <li className="grid grid-cols-6 gap-2 border-b-1">
      <div className="col-span-1 self-center">
        <img src={product.image.url} alt="Product" className="rounded w-full"/>
      </div>
      <div className="flex flex-col col-span-3 pt-2">
        <span className="text-gray-600 text-md font-semi-bold">{product.product_name}</span>
      </div>
      <div className="col-span-2 pt-3">
        <div className="flex items-center space-x-2 text-sm justify-between">
          <span className="text-gray-400">Qty-{product.quantity}</span>
          <span className="text-pink-400 font-semibold inline-block"></span>
        </div>
      </div>
    </li>
    </>
  )
}

export default Review