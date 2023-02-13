import React from 'react'
import picture_eric_murh from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg'
import '../styles/HomeTitle/HomeTitle.css'


export default function HomeTitle() {
    return(
        <div className='hometitle'>
            <div className='hometitle-picture-borders hometitle-picture-borders_dimensions hometitle-picture-borders_borders'>
                <img src={picture_eric_murh} alt="bord de mer" className='hometitle-picture' />
            </div>
            <h1 className='hometitle-picture-text hometitle-picture-text_dimensions hometitle-picture-text_borders hometitle-picture-text_syntaxe'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}