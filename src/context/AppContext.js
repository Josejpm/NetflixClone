import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {

    const[lang,setLang]=useState('SPA');

    const loginValues = {
        title:"login",
        input1:"placeholder",
        input2:"placeholder2",
        facebook:"facebook",
        captcha:"captcha",
        firstTime:"firstTime",
        subscribe:"subscribe",
        needHelp:"needHelp",
        remember:"remember",
        moreInfo:"moreInfo",
        error1:"error1",
        error2:"error2",
        showP:"showP",
        hideP:"hideP"
      }
    
    const footerValues = {
        questions:"questions",
        giftCard:"giftCard",
        terms:"terms",
        privacy:"privacy"
      }

    return ( 

        <AppContext.Provider
            value={{
                lang,
                loginValues,
                footerValues,
                setLang,
            }}
        >

            {props.children}
        </AppContext.Provider>
     );
}

