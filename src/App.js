import React, { useContext, Fragment } from 'react';
import './scss/App.scss'
import {AppContext} from './context/AppContext'
import { TranslatorProvider } from 'react-translate'

//Components
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'

function App() {

  const {lang} = useContext(AppContext)
  
  const getLayout=(lang)=>{
    return (
      <TranslatorProvider translations={require('./assets/i18n/'+lang+'.json')} >
            <Login/>
            <Footer/>
      </TranslatorProvider>
    )
  }

  return (
    <Fragment>
          <Header/>
          {lang==='SPA' ? getLayout('es') : getLayout('en') }     
    </Fragment>
  );
}

export default App;
