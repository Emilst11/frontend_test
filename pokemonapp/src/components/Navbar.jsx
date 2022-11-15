import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/pokeapi_256.3fa72200.png'
import '../styles/Navbar.scss'

const Navbar = () => {
    const location = useLocation()
    const navs = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]

    return(
        <div className="navs">
            <img src={Logo} alt="logo" />
            <ul className="navs-link">
                {navs.map((item, index) => 
                    <Link key={index} to={item.link} className={`navs-link-item ${location.pathname === item.link && 'active'}`}>{item.name}</Link>
                )}
            </ul>
        </div>
    )
}

export default Navbar