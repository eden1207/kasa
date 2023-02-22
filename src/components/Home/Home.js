import React from 'react'
import Header from '../Shared/Header'
import HomeTitle from './HomeTitle'
import CardCollection from './CardCollection'
import Footer from '../Shared/Footer'

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