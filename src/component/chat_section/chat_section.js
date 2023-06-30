import React, { Component } from 'react'
import "./chat_section.css"
import userIcon from "../../img/demoDP.jpg"
import emojiIcon from "../../img/happy.png"
import sendIcon from "../../img/send.png"
import greenDot from "../../img/greendot.png"
const user_name = 'Mayur\'s_id'
const active_state = 'Active'
export default class ChatSection extends Component {
render() {
    return (
        <section className='ChatScreenBody'>
            <section className='UserSection'>
                <div className='UserBox'>
                    
                    <div className='UserBoxInfoWrap'>
                        <img id = "userIcon" src = {userIcon} alt ="UserIcon" ></img>
                        <div className='UserBoxInfo'>
                            @{user_name}
                        </div>
                    </div>
                    <div className='UserBoxSearchWrap'></div>
                </div>
            </section>
            <section className= 'ChatSection'>
                <div className= 'UserInfo'>
                    <img id = "userIcon" src = {userIcon} alt ="UserIcon" ></img>
                    <div className='UserInfoBar'>
                        <div className='InfoWrap'>
                            <p className='UserNameHolder'>
                            @{user_name}
                            </p>
                            <p className='ActiveStatusHolder'>
                            <img className='GreenDot' src={greenDot} alt="Green Dot"></img>{active_state}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='Input'>
                    <img className='EmojiIcon' src = {emojiIcon}alt='Emoji'></img>
                    <div>
                        
                    </div>
                    <img className='SendButton' src={sendIcon} alt='Send'></img>
                </div>
            </section>
        </section>
      
    )
  }
}
