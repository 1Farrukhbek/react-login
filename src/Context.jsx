import { createContext, useState } from 'react';
import { textData  } from './textData/textData';

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
	
	// states
	const [lang, setLang] = useState('en');

	return (
		<ThemeContext.Provider value={[textData, lang, setLang]}>
			{ children }
		</ThemeContext.Provider>
	);
}

export {
	ThemeContext,
	ThemeProvider,
}