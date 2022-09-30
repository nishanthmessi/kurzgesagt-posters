const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img src={item.image.url} alt="item" className="h-full w-full object-cover object-center" />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <button>{item.name}</button>
              </h3>
              <p className="ml-4">{item.line_total.formatted_with_symbol}</p>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <button className="font-bold" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
              <p className="text-gray-500">Qty {item.quantity}</p>
            <button className="font-bold" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
            <div className="flex">
              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default CartItem