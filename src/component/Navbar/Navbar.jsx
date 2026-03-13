import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import ExtraNavbar from './ExtraNavbar';

const navigationData = [

    {
        "id": "1",
        "title": "Home",
        "url": "/",
        "icon": "🏠"
    },
    {
        "id": "2",
        "title": "About",
        "url": "/about",
        "icon": "ℹ️"
    },
    {
        "id": "3",
        "title": "Services",
        "url": "/services",
        "icon": "⚙️",
        "submenu": [
            {
                "id": "3.1",
                "title": "Web Design",
                "url": "/services/web-design"
            },
            {
                "id": "3.2",
                "title": "Development",
                "url": "/services/development"
            }
        ]
    },
    {
        "id": "4",
        "title": "Portfolio",
        "url": "/portfolio",
        "icon": "🎨"
    },
    {
        "id": "5",
        "title": "Contact",
        "url": "/contact",
        "icon": "📞"
    }
]

const Navbar = () => {

    const [opne,setOpne] = useState(false)
const links = 
                    navigationData.map(route => <ExtraNavbar key={route.id} route={route}></ExtraNavbar>)
                

    return (
        <nav className="flex justify-between  mx-10 mt-4">
            <span className="flex items-center gap-4" onClick={() => setOpne(!opne)}>
                {opne? <X className="md:hidden"></X> : <Menu className="md:hidden" />}
                <ul className={ `md:hidden absolute text-black duration-1000  rounded-2xl
                    ${opne?"top-8" : "-top-40"}
                    bg-amber-100`}>
                    {
                        links
                    }
                </ul>
                <h3 className="text-xl font-bold">My Navbar</h3>

            </span>

            <ul className="md:flex hidden gap-6">
                {/* {
                    navigationData.map(route => <ExtraNavbar key={route.id} route={route}></ExtraNavbar>)
                } */}

                {
links
                }
            </ul>
            <button>Sign In</button>
        </nav>

    );
};

export default Navbar;
