import React from "react";

const Login = () => {
  return (
    <>
      <main className="container">
      <form className='login-form' action="!#">
        <legend>Inicia sesión</legend>

        <div className="inputs">
          <div className="input-field">
            <input type="text" name="user" id="user"/>
            <label htmlFor="user"> Email o número de teléfono </label>
          </div>
    
          <div className="input-field">
            <input type="password" name="password" id="password" />
            <label htmlFor="password" > Contraseña </label>
          </div>
        </div>

        <div className="submit">
          <input type="submit" value="Iniciar sesión" />
        </div>

        <div className="actions">
          <div className="remember">
            <input type="checkbox" name="remember" id="remember" />
            <label> Recuerdame </label>
          </div>
          <div className="help">
            <a href="!#"> ¿Necesitas ayuda? </a>
          </div>
        </div>   {/*  Actions */}

      </form>

      <div className="bottom-content">
        <div className="facebook">
          <i className="fab fa-facebook-square"></i>
          <a className="Text" href="!#"> Iniciar sesión con Facebook </a>
        </div>
        
        <p className="new-user">
          ¿Primera vez en Netflix? <a href="!#">Suscribete ya</a>
        </p>
        <p className="captcha">
          Esta pagina esta protegida por Google reCAPTCHA para comprobar que no
          eres un robot. <a href="!#"> Mas Info</a>
        </p>
      </div>
      </main>

      
    </>
  );
};

export default Login;
