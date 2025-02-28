import './index.css';
import HomePage from './pages/HomePage';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<StrictMode>
		<HomePage/>
	</StrictMode>
);
