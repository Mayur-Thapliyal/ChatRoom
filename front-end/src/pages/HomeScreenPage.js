import Nevbar from "../component/nevbar/nevbar";
import HomeScreen from "../component/home_screen/home_screen";
import Footer from "../component/footer/footer";

import React from 'react'

export default function HomeScreenPage() {
return (
    <div>
        <Nevbar title="Fun chat"/>
        <HomeScreen/>
        <Footer/>
    </div>
)
}
