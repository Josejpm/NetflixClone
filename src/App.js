import React from 'react';
import './scss/App.scss'

//Components
import Header from './components/Header/Header'
import Login from './components/Login'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
        <Header/>
        <Login/>
        <Footer/>
    </>
  );
}

export default App;
