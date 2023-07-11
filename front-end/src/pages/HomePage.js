import React from 'react'
import Nevbar from '../component/nevbar/nevbar'
import HomeBody from '../component/homebody/home_body'
import Footer from '../component/footer/footer'

export default function HomePage() {
    return (
    <div>
        <Nevbar title="Fun chat"/>
        <HomeBody/>
        <Footer/>
    </div>
    )
}
