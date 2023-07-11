import React, { Component, memo } from 'react'
import "./footer.css"
import icon from "../../img/icon.png"
class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div>
                <a href="#" target="_blank" >
                    <span>About</span>
                </a>
            </div>
            <div>
                <a href="#" target="_blank" >
                <img className="footer_icon" src={icon} alt='ICON'/>
                </a>
            </div>

            <div>
                <a href="#" target="_blank" >
                    <span>Contect Us</span>
                </a>
            </div>
      </footer>
    )
  }
}

export default memo( Footer)