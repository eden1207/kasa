import React from 'react'
import picture_kalen_emsley from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'
import '../../styles/AboutTitle/AboutTitle.css'


export default function AboutTitle() {
    return(
        <div className='abouttitle-picture-borders abouttitle-picture-borders_dimensions abouttitle-picture-borders_borders'>
            <img src={picture_kalen_emsley} alt="montagne" className='abouttitle-picture' />
        </div>
    )
}