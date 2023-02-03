import React from 'react'
import logo_resize from '../assets/logo_resize.png'
import '../styles/Footer/Footer.css'
import { RiCopyrightLine } from 'react-icons/ri';


export default function Footer() {
    return(
        <footer className='footer footer_dimensions footer_borders'>
            <img src={logo_resize} className="logo-footer" alt="mini logo Kasa" />
            <h2 className='footer-text'><RiCopyrightLine /> 2020 Kasa. All rights reserved</h2>
        </footer>
    )
}