import { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { commerce } from '../lib/commerce'

const CheckoutForm = ({ checkoutToken }) => {
  const methods = useForm()
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision, checkoutToken, shippingCountry]);

  return (
    <>
      <div className="rounded-md">
        <FormProvider {...methods}>
        <form>
          <section>
            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-4">Shipping & Billing Information</h2>
            <fieldset className="mb-4 text-gray-600">
              <div className="border border-slate-300 rounded-md mb-4 bg-white">
                <input name="name" className="p-4 focus:outline-none w-full" placeholder="name" required=""/>
              </div>
              <div className="border border-slate-300 rounded-md mb-4 bg-white">
                <input name="email" type="email" className="p-4 focus:outline-none w-full" placeholder="email" required=""/>
              </div>
              <div className="border border-slate-300 rounded-md mb-4 bg-white">
                <input name="address" className="p-4 focus:outline-none w-full" placeholder="address"/>
              </div>
              <div className="border border-slate-300 rounded-md mb-4 bg-white">
                <input name="city" className="p-4 focus:outline-none w-full" placeholder="city"/>
              </div>
              <div className="rounded-md mb-4 bg-white">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your state</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={shippingSubdivision} onChange={(e) => setShippingSubdivision(e.target.value)}>
                  {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border border-slate-300 rounded-md mb-4 bg-white">
                <input name="postal_code" className="p-4 focus:outline-none w-full" placeholder="pincode"/>
              </div> 
            </fieldset>
          </section>
        </form>
        </FormProvider>
      </div>
    </>
  )
}

export default CheckoutForm