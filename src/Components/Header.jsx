import { useContext } from 'react';
import { ThemeContext } from '../Context'


export default function Header() {

  // switch day or night
  const switchDay = () => {
    document.getElementById('bg-color').classList.toggle('bg-dark');
    document.getElementById('bg-color').classList.toggle('text-white');
  }

  // Umumiy otadan kelayotgan datani qabul qilamiz
  const [textData, lang] = useContext(ThemeContext);

  return (
    <div className="container d-flex justify-content-between mt-2">
      <h1 className="login-heading mb-4 font-weight-bold">
        { (textData.find(data => {
            if(data.lang === lang) {
                return data;
            }
            return null;
          })).helloText }
      </h1>

      <div className="custom-control custom-switch mr-5">
        <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={switchDay} />
        <label className="custom-control-label" htmlFor="customSwitch1">DARK MODE</label>
      </div>
    </div>
  );
}