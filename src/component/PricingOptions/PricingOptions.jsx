import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DasiCard from '../PricingCard/DasiCard';

const PricingOptions = ({pricingPromise}) => {

const pricingData = use (pricingPromise);

console.log(pricingData);

    return (
        <div>
            <h2 className='text-5xl'>Get our Membership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* {
                    pricingData.map(pricing => <PricingCard
                        key={pricing.id} 
                        pricing={pricing}></PricingCard>)
                } */}
                {
                    pricingData.map(pricing => <DasiCard
                        key={pricing.id} 
                        pricing={pricing}></DasiCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;