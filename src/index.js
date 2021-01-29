import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
	<SpeechProvider appId="afb92be3-80f8-4d49-ab93-8155fde44a6b" language="en-US">
		<Provider>
			<App />
		</Provider>
	</SpeechProvider>,
	document.getElementById('root')
);
