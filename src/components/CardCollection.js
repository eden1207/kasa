import React from 'react'
import { dataList } from '../datas/dataList'
import Card from './Card'
import '../styles/CardCollection/CardCollection.css'


export default function CardCollection() {

    return(
        <div className='card-collection card-collection_border card-collection_gap'>
            {dataList.map(({ id, title, cover }) => 
                <Card key={id} title={title} cover={cover} />
            )}
        </div>
    )

}