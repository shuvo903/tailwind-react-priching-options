import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({features}) => {
    return (
        <div>
            <p className='flex mt-4'><CircleCheckBig className='mr-2'></CircleCheckBig> {features}</p>
        </div>
    );
};

export default PricingFeatures;