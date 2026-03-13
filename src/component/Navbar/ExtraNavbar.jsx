import React from 'react';

const ExtraNavbar = ({route}) => {

console.log(route.url);

    return (
        <div>
            <li className='px-10'>
                <a href={route.url}></a>{route.title}
                </li>
        </div>
    );
};

export default ExtraNavbar;