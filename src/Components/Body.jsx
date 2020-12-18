import { useContext, useRef, useState, useEffect } from 'react';
import { ThemeContext } from '../Context';

export default function Body() {
	// references
  const nameRef = useRef(null);
  const passRef = useRef(null);

	// states
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  let [alert, setAlert] = useState(true);
  let [disabled, setDisabled] = useState(true);

  useEffect(() => {
  	setDisabled(!(username.length > 3 && password.length > 5));
  }, [username, password]);

  // checks length of inputs
  const checkLength = () => {
    nameRef.current.classList = 'form-control';
    passRef.current.classList = 'form-control';

    if (passRef.current.value.trim().length < 5 || nameRef.current.value.trim().length < 3) {

      nameRef.current.classList.add('border-danger');
      passRef.current.classList.add('border-danger');
      setAlert(<div className="alert alert-danger" role="alert">Xato to'ldirildi!</div>);
    } else {
      nameRef.current.classList.add('border-success');
      passRef.current.classList.add('border-success');
      setAlert(true);
    }
  }

	const [textData, lang] = useContext(ThemeContext);

	return (
	  <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-5 mx-auto">
          <form>
          {alert}
            <div className="form-label-group">
              <input 
              type="email" 
              id="inputEmail" 
              className="form-control" 
              placeholder=
              { (textData.find(data => {
						    if(data.lang === lang) {
						        return data;
						    }
						    return null;
              })).emailText } 
              required 
              autoFocus
              ref={nameRef} 
	          	onChange={(e) => setUsername(e.target.value)} />

              <label htmlFor="inputEmail">
                {(textData.find(data => {
						    if(data.lang === lang) {
						        return data;
						    }
						    return null;
							})).emailText}
                </label>
            </div>

            <div className="form-label-group">
              <input type="password" id="inputPassword" className="form-control" placeholder={(textData.find(data => {
						    if(data.lang === lang) {
						        return data;
						    }
						    return null;
              })).passwordText} 
              required
              ref={passRef} 
	          	onChange={(e) => setPassword(e.target.value)} />

              <label htmlFor="inputPassword">{(textData.find(data => {
						    if(data.lang === lang) {
						        return data;
						    }
						    return null;
							})).passwordText}
              </label>
            </div>
            <div className="custom-control custom-checkbox mb-3">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">{(textData.find(data => {
						    if(data.lang === lang) {
						        return data;
						    }
						    return null;
							})).pememberText}</label>
            </div>

            <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" disabled={disabled} type='submit' onClick={checkLength}>
              {(textData.find(data => {
						    if(data.lang === lang) {
						        return data;
						    }
						    return null;
							})).registerText}</button>
            <div className="text-center">
              <a className="small" href="https://test.najottalim.uz/">{(textData.find(data => {
						    if(data.lang === lang) {
						        return data;
						    }
						    return null;
							})).forgotText}</a>
              <div className ="mt-2 font-weight-bold">{(textData.find(data => {
						    if(data.lang === lang) {
						        return data;
						    }
						    return null;
							})).companyText}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
	);
}























