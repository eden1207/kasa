import React from 'react'
import Header from './Header'
import CardPageDescription from './CardPageDescription'
import Footer from './Footer'

export default function CardPage({ title, cover, location, tags, host, rating }) {
    return(
        <div>
            <Header />
            <CardPageDescription title={title} cover={cover} location={location} tags={tags} host={host} rating={rating} />
            <Footer />
        </div>
    )
}