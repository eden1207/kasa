import React from 'react'
import Header from '../Shared/Header'
import ErrorPageMessage from './ErrorPageMessage'
import Footer from '../Shared/Footer'

export default function ErrorPage() {
    return(
        <React.Fragment>
            <Header />
            <ErrorPageMessage />
            <Footer />
        </React.Fragment>
    )
}