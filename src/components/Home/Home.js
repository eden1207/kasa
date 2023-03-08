import React from 'react'
import Header from '../Shared/Header'
import HomeTitle from './HomeTitle'
import CardCollection from './CardCollection'
import Footer from '../Shared/Footer'

export default function Home() {
    return(
        <React.Fragment>
            <Header />
            <HomeTitle />
            <CardCollection />
            <Footer />
        </React.Fragment>
    )
}