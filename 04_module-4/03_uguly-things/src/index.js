import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { UglyContextProvider } from './components/Context';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<UglyContextProvider>
			<App />
		</UglyContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
