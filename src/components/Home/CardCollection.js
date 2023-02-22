import React from 'react'
import { dataList } from '../../datas/dataList'
import Card from './Card'
import '../../styles/CardCollection/CardCollection.css'


export default function CardCollection() {

    return(
        <div className='card-collection card-collection_border card-collection_gap'>
            {dataList.map((data) => 
                <Card key={data.id} id={data.id} title={data.title} cover={data.cover} />
            )}
        </div>
    )

}