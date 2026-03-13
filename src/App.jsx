import { Suspense } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import PricingOptions from './component/PricingOptions/PricingOptions'


function App() {

  const pricingPromise = fetch('pricing.json')
  .then(res => res.json());

  return (

    <>
     <header>
      <Navbar></Navbar>
     </header>
     <main>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
     </main>
    </>
  )
}

export default App
