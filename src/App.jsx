import React, { useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  // const darkMode = useRef(null)
  const loginCheck = useRef(null)
  // const passwordCheck = useRef(null)

  const textData = {
    en: {
      helloText: "Hello",
      emailText: "Email adress",
      passwordText: "Password",
      pememberText: "Remember password",
      registerText: "Sign in",
      forgotText: "Forgot password?",
      companyText: "Created by NajotX company!"
    },
    ru: {
      helloText: "Привет",
      emailText: "Email адрес",
      passwordText: "Пароль",
      pememberText: "Запомнить пароль",
      registerText: "Войти",
      forgotText: "Забыл пароль?",
      companyText: "Сделано компанией NajotX!"
    }, 
    uz: {
      helloText: "Salom",
      emailText: "Email manzil",
      passwordText: "Parol",
      pememberText: "Parolni eslash qolish",
      registerText: "Kirish",
      forgotText: "Parolni unutdingizmi?",
      companyText: "NajotX kompaniyasi tomonidan yaratilgan!"
    }
  }

 
  

  const [lang, setLang] = useState('en')

   return (
    <>
 <div className="container-fluid">
  <div className="row no-gutter">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
            <select className="custom-select col-md-2 col-lg-3 mt-0 position-absolute z2" defaultValue ={lang} onChange={e => setLang(e.target.value)}>
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="uz">O'zbekcha</option>
            </select>
            <div className="custom-control custom-switch fixed-bottom">
  <input type="checkbox" className="custom-control-input" id="customSwitch1" />
  <label className="custom-control-label" htmlFor="customSwitch1">DARK MODE</label>
</div>

    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4 font-weight-bold">{textData[lang].helloText}</h3>
              <form>
                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control" placeholder={textData[lang].emailText} required autoFocus
                  ref={loginCheck} onChange={
                    () => {
                      if (loginCheck.current.value.trim() > 5) {
                        loginCheck.current.classList('bg-warning')
                      }
                    }
                  } />
                  <label htmlFor="inputEmail">{textData[lang].emailText}</label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder={textData[lang].passwordText} required />
                  <label htmlFor="inputPassword">{textData[lang].passwordText}</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">{textData[lang].pememberText}</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">{textData[lang].registerText}</button>
                <div className="text-center">
                  <a className="small" href="https://test.najottalim.uz/">{textData[lang].forgotText}</a>
                  <div className ="mt-2 font-weight-bold">{textData[lang].companyText}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
    );
  }
  
  export default App;
  