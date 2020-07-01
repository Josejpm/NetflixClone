import React, { useContext } from 'react'
import './Footer.scss'
import { AppContext } from '../../context/AppContext'
import { translate } from 'react-translate'

const Footer = ({t}) => {

    const {setLang,footerValues} = useContext(AppContext)
    const { questions,giftCard,terms,privacy }=footerValues

    return ( 
        <div className="footer-container">
            <footer className="footer">
                <p>{t(questions)}</p>
                <ul className="navbar">
                  <li> <a href="!#">{t(giftCard)} </a> </li> 
                  <li> <a href="!#">{t(terms)} </a> </li>
                  <li> <a href="!#"> {t(privacy)} </a> </li>
                </ul>
                <div className="languages">
                    <select name="lang" onChange={e=>setLang(e.target.value)} >
                        <option value="SPA">Espanol</option>
                        <option value="ENG">English</option>
                    </select>
                </div>
            </footer>
        </div>

     );
}
 
export default translate('footer')(Footer);