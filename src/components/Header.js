import React from 'react'
import logo from '../assets/logo.png'
import '../styles/Header/Header.css'


export default function Header() {
    return(
        <header className='banner banner_border' role="banner">
            <img src={logo} alt="logo Kasa" />
            <nav id="main-nav" className='menu menu_dimensions menu_borders' aria-label="main" role="navigation">
                <ol className='menu-list menu-list_dimensions'>
                    <li><a title="lien_accueil_apropos" href="/">Accueil</a></li>
                    <li><a title="lien_accueil_apropos" href="/apropos">A propos</a></li>
                </ol>
            </nav>
        </header>
    )
}