import React from 'react'
import { Link } from 'react-router-dom'
import logo_404 from '../assets/404.png'

export default function ErrorPage() {
    return(
        <div>
            <img className='logo_404' src={logo_404} alt="logo 404" />
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <p><Link to='/'>Retourner sur la page d'accueil</Link></p>
        </div>
    )
}