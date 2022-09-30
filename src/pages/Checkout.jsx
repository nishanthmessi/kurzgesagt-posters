import { useState, useEffect } from 'react'
import { commerce } from '../lib/commerce'
import CheckoutForm from './CheckoutForm'
import Review from './Review'

const Checkout = ({ cart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null)

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'})
        setCheckoutToken(token)
      } catch (error) {
        console.log(error);
      }
    }
    generateToken()
  }, [cart])

  return (
    <>
      <div className="m-auto left-0 right-0 max-w-6xl">
      <div className="h-screen grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 space-y-8 px-12">
          <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
            <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                <div className="text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              <div className="text-sm font-medium ml-3">Checkout</div>
            </div>
            <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
          </div>
            {checkoutToken && <CheckoutForm checkoutToken={checkoutToken}/>}
            <div className="rounded-md">
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Information</h2>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600 ">
                  <input name="card" className="focus:outline-none border border-slate-300 rounded-md p-3 w-full" placeholder="Card number MM/YY CVC" required=""/>
                </fieldset>
              </section>
            </div>
            <button className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
              Pay {}
            </button>
        </div>
        <div className="col-span-1 bg-white lg:block hidden">
          <h1 className="py-6 border-b-2 text-xl font-bold text-gray-600 px-8">Order Summary</h1>
            <ul className="py-6 border-b space-y-6 px-8">
              {checkoutToken && checkoutToken.line_items.map((product) => (
                <Review key={product.cart_id} product={product}/>
              ))}
            </ul>

            {checkoutToken && <>
              <div className="px-8 border-b">
              <div className="flex justify-between py-4 text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-pink-500">{checkoutToken.subtotal.formatted_with_symbol}</span>
              </div>
              <div className="flex justify-between py-4 text-gray-600">
                <span>Shipping</span>
                <span className="font-semibold text-pink-500">Free</span>
              </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
              <span>Total</span>
              <span>{checkoutToken.total.formatted_with_symbol}</span>
            </div>
            </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout