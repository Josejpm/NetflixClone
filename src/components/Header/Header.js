import React from 'react'
import logo from '../../assets/img/logo.png'
import '../Header/header.scss'

const Header = () => {
    return ( 
        <header className="site-header">
           <img src={logo} alt="logo"/>
        </header>

     );
}
 
export default Header;