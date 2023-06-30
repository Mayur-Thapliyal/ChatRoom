import React from 'react'
import Nevbar from '../component/nevbar/nevbar'
import ChatSection from '../component/chat_section/chat_section'
import Footer from '../component/footer/footer'
export default function ChatScreenPage() {
    return (
    <div>
        <Nevbar title="Fun chat"/>
        <ChatSection/>
        <Footer/>

    </div>
    )
}
