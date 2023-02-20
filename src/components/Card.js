import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Card/Card.css'

export default function Card({ id, title, cover }) {
    return(
        <div>
            <Link className='card card_dimensions' to={'/logement_' + id}>
                <div className='card-picture-borders card-picture-borders_dimensions card-picture-borders_borders'>
                    <img src={cover} alt={'couverture de la page ' + title} className='card-picture' />
                </div>
                <h3 className='card-picture-text card-picture-text_dimensions card-picture-text_borders card-picture-text_syntaxe'>{title}</h3>
            </Link>
        </div>
    )
}