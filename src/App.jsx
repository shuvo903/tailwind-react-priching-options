import { Suspense } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import PricingOptions from './component/PricingOptions/PricingOptions'
import RasultChart from './component/RasultChart/RasultChart';
import axios from 'axios';
import MarkesChart from './component/MarkesChart/MarkesChart';


function App() {

  const pricingPromise = fetch('pricing.json')
  .then(res => res.json());

  const marsPromise = axios.get("markes.json")

  return (

    <>
     <header>
      <Navbar></Navbar>
     </header>
     <main>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <RasultChart></RasultChart>

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <MarkesChart marsPromise={marsPromise}></MarkesChart>
      </Suspense>
     </main>
    </>
  )
}

export default App
