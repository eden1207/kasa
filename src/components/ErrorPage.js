import React from 'react'
import Header from './Header'
import ErrorPageMessage from './ErrorPageMessage'
import Footer from './Footer'

export default function ErrorPage() {
    return(
        <div>
            <Header />
            <ErrorPageMessage />
            <Footer />
        </div>
    )
}