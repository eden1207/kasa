import React from 'react'
import Header from '../Shared/Header'
import AboutTitle from './AboutTitle'
import Footer from '../Shared/Footer'
import AboutCardCollection from './AboutCardCollection'

export default function About() {
    return(
        <React.Fragment>
            <Header />
            <AboutTitle />
            <AboutCardCollection />
            <Footer />
        </React.Fragment>
    )
}