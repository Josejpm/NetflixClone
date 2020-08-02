import React, { Fragment, useState, useContext } from "react";
import { translate } from 'react-translate'
import {AppContext} from '../../context/AppContext'
import './Login.scss'

const Login = ({t}) => {
  const {loginValues} = useContext(AppContext)
  const { title,input1,input2,facebook,captcha,firstTime,subscribe,remember,needHelp,moreInfo,error1,error2,showP,hideP}=loginValues

  const[error,setError] = useState({userError:false,passError:false,userClass:'',passClass:''});
  const {userError,passError,userClass,passClass}=error;

  const [reveal,setReveal]=useState({type:'password',show:false});
  const {type,show} = reveal;

  const [userSize,setUserSize] = useState('normal');
  const [passSize,setPassSize] = useState('normal');

  const validateForm = e=>{

    if(e.target.name==='user'){
      e.target.value.length !== 0 ? setUserSize('small') : setUserSize('normal')
      e.target.value.length <= 2 
        ? setError({...error, userError:true,userClass:'invalid'}) 
        :  setError({...error, userError:false,userClass:'valid'});
    } else {
      e.target.value.length !== 0 ? setPassSize('small') : setPassSize('normal')
      e.target.value.length <4 
        ? setError({...error, passError:true,passClass:'invalid'}) 
        :  setError({...error, passError:false,passClass:'valid'})
    }
  }

  const showPass = ()=>{
    !show ? setReveal({type:'text',show:true}) : setReveal({type:'password',show:false});
  }


  return (
    <Fragment>
      <main className="container">
      <form className='login-form' action="!#">
        <legend>{t(title)}</legend>

        <div className="inputs">
          <div className="input-field">
            <label className={userSize} htmlFor="user"> {t(input1)} </label>
            <input 
              className={userClass} 
              type="text" 
              name="user" 
              id="user" 
              onBlur={e=>validateForm(e)} 
              onChange={e=>validateForm(e)} 
            />
            {userError ? <p className="error" >{t(error1)}</p> : null}
          </div>
    
          <div className="input-field">
            <label className={passSize} htmlFor="password" > {t(input2)} </label>
            <input 
              className={passClass} 
              type={type} 
              name="password" 
              id="password" 
              onBlur={e=>validateForm(e)} 
              onChange={e=>validateForm(e)}  
            />
            { show  ? <span onClick={showPass}> {t(hideP)} </span> : <span onClick={showPass}> {t(showP)} </span> }
            { passError ? <p className="error"> {t(error2)} </p> : null }
          </div>
        </div>

        <div className="submit">
          <input 
            type="submit" 
            value={t(title)}
            onSubmit={e=>e.preventDefault()}
          />
        </div>

        <div className="actions">
          <div className="remember">
            <input type="checkbox" name="remember" id="remember" />
            <label> {t(remember)} </label>
          </div>
          <div className="help">
            <a href="!#"> {t(needHelp)} </a>
          </div>
        </div>   {/*  Actions */}

      </form>

      <div className="bottom-content">
        <div className="facebook">
          <a className="Text" href="!#"> <i className="fab fa-facebook-square"></i> <span> {t(facebook)} </span> </a>
        </div>
        
        <p className="new-user"> {t(firstTime)} <a href="!#"> {t(subscribe)}</a> </p>
        <p className="captcha">{t(captcha)}<a href="!#"> {t(moreInfo)}</a>
        </p>
      </div>
      </main>

      
      </Fragment>
  );
};

export default translate('loginPage')(Login)
