import React from 'react'
import './nevbar.css'
import icon from "../../img/icon.png"
function button_click(){
    console.log('i got clicked')
    {
        var x = document.getElementById("nav_manu_01");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
    
}
export default function Nevbar(props) {
    return (
    <section className="nevbar">
    <div className="nav_wrap" id="nav_wrap_01">
        <nav className="navbar_hamburger" id="navbar_02">
          <img onClick={() => window.location.href = '/'} className='img_logo' src={icon} alt='ICON'/>{props.title}
          <button onClick={button_click}><i className="fa-solid fa-bars"></i></button>
        </nav>
        <div className="nav_manu" id="nav_manu_01">
          <ul className="navbar_links_hamburger">
            <li><a href="/home">Home</a></li>
            <li><a href="/chat">Chat</a></li>
            <li><a href="/login">Log In</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>
        
        <nav className="navbar_normal" id="navbar_01">
          <img onClick={() => window.location.href = '/'} className='img_logo'src={icon} alt='ICON'/>{props.title}
          <ul className= 'navbar-links'>
            <li><a href="/home">Home</a></li>
            <li><a href="/chat">Chat</a></li>
            <li><a href="/login">Log In</a></li>
            <li><a href="/signup">Sign up</a></li>
          </ul>
        </nav>
      </div>
</section>
  )
}
