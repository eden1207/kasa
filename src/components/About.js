import React from 'react'
import Header from './Header'
import AboutTitle from './AboutTitle'
import Footer from './Footer'
import AboutCardCollection from './AboutCardCollection'

export default function About() {
    return(
        <div>
            <Header />
            <AboutTitle />
            <AboutCardCollection />
            <Footer />
        </div>
    )
}