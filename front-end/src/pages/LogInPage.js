import LoginScreen from "../component/logIn_signup_page/login";
import Footer from "../component/footer/footer";
import Nevbar from "../component/nevbar/nevbar";

import React from 'react'

export default function LogInPage() {
return (
    <div>
        <Nevbar title="Fun chat"/>
        <LoginScreen/>
        <Footer/>
    </div>
)
}
