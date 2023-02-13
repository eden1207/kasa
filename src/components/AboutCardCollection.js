import React from 'react'
import { datasAbout } from '../datas/datasAbout'
import AboutCard from './AboutCard'
import '../styles/AboutCardCollection/AboutCardCollection.css'


export default function AboutCardCollection() {

    return(
        <div className='AboutCardListStyle'>
            {datasAbout.map(({ id, title, text, classCloseWindow, classOpenWindow, classText }) =>
                <AboutCard key={id} title={title} text={text} classCloseWindow={classCloseWindow} classOpenWindow={classOpenWindow} classText={classText} />
            )}
        </div>
    )

}