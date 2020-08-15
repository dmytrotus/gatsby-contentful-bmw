import React from "react"
import Logo from "../../../assets/logo.png";


const Navbar = () => {

	return(
		<nav className="nk-navbar nk-navbar-top nk-navbar-transparent nk-navbar-white-text-on-top">
            <div className="container">
                <div className="nk-nav-table">

                    <a href="index.html" className="nk-nav-logo">
                        <img src={Logo} alt="" width="51" />
                    </a>


                    <ul className="nk-nav nk-nav-right">

                        <li className="nk-drop-item">
                            <a href="#">Download Brochure</a>
                        </li>

                        
                    </ul>

                </div>
            </div>
        </nav>
		)

}

export default Navbar