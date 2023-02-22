import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header/Header.css'


export default function Header() {
    return(
        <header className='banner banner_border' role="banner">
            <img className='logo' src={logo} alt="logo Kasa" />
            <nav id="main-nav" className='menu menu_dimensions menu_borders' aria-label="main" role="navigation">
                <Link className='menu-link' to={'/'}>Accueil</Link>
                <Link className='menu-link' to={'/apropos'}>A propos</Link>
            </nav>
        </header>
    )
}