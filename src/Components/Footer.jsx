import { useContext } from 'react';
import { ThemeContext } from '../Context';

export default function Footer() {
	const [ textData, lang, setLang ] = useContext(ThemeContext);

	return (
    <div className='container d-flex justify-content-end py-4'>
      <select className="custom-select col-2 ml-5" defaultValue ={lang} onChange={e => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="uz">O'zbekcha</option>
      </select>
      {/* {
          textData.map((data, index) => {
            return <option key={index} value={data.lang}>{data.language}</option>
          })
        } */}
    </div>
	);
}