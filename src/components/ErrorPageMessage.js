import React from 'react'
import { Link } from 'react-router-dom'
import logo_404 from '../assets/404.png'
import '../styles/ErrorPageMessage/ErrorPageMessage.css'

export default function ErrorPageMessage() {
    return(
        <div className='ErrorPage'>
            <img className='logo_404' src={logo_404} alt="logo 404" />
            <div className='ErrorPageText ErrorPageText_dimensions ErrorPageText_borders'>
                <h2 className='ErrorMessage404'>Oups! La page que vous demandez n'existe pas.</h2>
                <p><Link className='ErrorMessageLink' to='/'>Retourner sur la page d'accueil</Link></p>
            </div>
        </div>
    )
}