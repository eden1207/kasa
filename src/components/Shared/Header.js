import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header/Header.css'

function isHomePageActive(url){
    if(url === '/') {
        return 'active'
    } else{
        return 'inactive'
    }
}

function isAboutPageActive(url){
    if (url === '/apropos') {
        return 'active'
    } else{
        return 'inactive'
    }
}


export default function Header() {
    const url = useLocation().pathname;
    return(
        <header className='banner banner_border' role="banner">
            <img className='logo' src={logo} alt="logo Kasa" />
            <nav id="main-nav" className='menu menu_dimensions menu_borders' aria-label="main" role="navigation">
                <Link className={'menu-link-' + isHomePageActive(url)} to={'/'}>Accueil</Link>
                <Link className={'menu-link-' + isAboutPageActive(url)} to={'/apropos'}>A propos</Link>
            </nav>
        </header>
    )
}