import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({ pricing }) => {

    const { name, price, description, features } = pricing

    return (
        <div  className="border flex flex-col  bg-amber-600 rounded-2xl p-4">
            {/* Card header */}

            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body */}

            <div className="bg-amber-400 p-4 rounded-2xl mt-10 flex-1">
                <p>{description}</p>
                {
                    features.map((features, index) => <PricingFeatures key={index} features={features}></PricingFeatures>)
                }
            </div>
            <button className='btn w-full mt-5'>Subscribe</button>
        </div>
    );
};

export default PricingCard;