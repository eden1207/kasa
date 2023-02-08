import React from 'react'
import Header from './Header'
import HomeTitle from './HomeTitle'
import CardCollection from './CardCollection'
import Footer from './Footer'

export default function Home() {
    return(
        <div>
            <Header />
            <HomeTitle />
            <CardCollection />
            <Footer />
        </div>
    )
}