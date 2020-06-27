import React from 'react'
import './Footer.scss'

const Footer = () => {
    return ( 
        <div className="footer-container">
        <footer className="footer">
            <p>¿Preguntas? Llama al 800-123-4567</p>
            <ul className="navbar">
              <li> <a href="!#">Términos de las tarjetas de regalo </a> </li> 
              <li> <a href="!#">Términos de uso </a> </li>
              <li> <a href="!#"> Declaración de privacidad </a> </li>
            </ul>
            <div className="languages">
                <select name="lang">
                    <option value="ENG">Ingles</option>
                    <option value="SPA">Espanol</option>
                </select>
            </div>
        </footer>
      </div>

     );
}
 
export default Footer;