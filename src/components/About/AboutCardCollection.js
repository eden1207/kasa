import React from 'react'
import { datasAbout } from '../../datas/datasAbout'
import InformationCard from '../Shared/InformationCard'
import '../../styles/AboutCardCollection/AboutCardCollection.css'


export default function AboutCardCollection() {

    return(
        <div className='AboutCardListStyle'>
            {datasAbout.map((data) =>
                <InformationCard key={data.id} title={data.title} text={data.text} isCardPage={false} isList={false} />
            )}
        </div>
    )

}