import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  return (
    <>
      <Header />
      {/*header*/}

      <Body />
      {/*body*/}

      <Footer />
      {/*footer*/}
    </>
  );
}

export default App;


// function App() {
  
//   const darkMode = useRef(null)
//   const loginCheck = useRef(null)
//   // const passwordCheck = useRef(null)
  
  
  
  
  
  
//   const [lang, setLang] = useState('en')
  
//   return (
//     <>
//    <div className="" ref={darkMode}>
//     {/* <div className="d-flex justify-content-between mt-2">
//       <select className="custom-select col-2 ml-5" defaultValue ={lang} onChange={e => setLang(e.target.value)}>
//         <option value="en">English</option>
//         <option value="ru">Русский</option>
//         <option value="uz">O'zbekcha</option>
//       </select>
//       <div className="custom-control custom-switch mr-5">
//         <input type="checkbox" className="custom-control-input" id="customSwitch1" />
//         <label className="custom-control-label" htmlFor="customSwitch1">DARK MODE</label>
//       </div>
//     </div> */}
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4 col-lg-5 mx-auto">
//           <h3 className="login-heading mb-4 font-weight-bold">{textData[lang].helloText}</h3>
//           <form>
//             <div className="form-label-group">
//               <input type="email" id="inputEmail" className="form-control" placeholder={textData[lang].emailText} required autoFocus
//               ref={loginCheck} onChange={
//                 () => {
//                   if (loginCheck.current.value.trim() > 5) {
//                     loginCheck.current.classList('bg-warning')
//                   }
//                 }
//               } />
//               <div className="invalid-feedback"></div>
//               <label htmlFor="inputEmail">{textData[lang].emailText}</label>
//             </div>
//             <div className="form-label-group">
//               <input type="password" id="inputPassword" className="form-control" placeholder={textData[lang].passwordText} required />
//               <label htmlFor="inputPassword">{textData[lang].passwordText}</label>
//             </div>
//             <div className="custom-control custom-checkbox mb-3">
//               <input type="checkbox" className="custom-control-input" id="customCheck1" />
//               <label className="custom-control-label" htmlFor="customCheck1">{textData[lang].pememberText}</label>
//             </div>
//             <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">{textData[lang].registerText}</button>
//             <div className="text-center">
//               <a className="small" href="https://test.najottalim.uz/">{textData[lang].forgotText}</a>
//               <div className ="mt-2 font-weight-bold">{textData[lang].companyText}</div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
    
    
//     </>
//     );
//   }
  
//   export default App;
  