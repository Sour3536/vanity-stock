import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';
import { BackTop, Button } from 'antd';
import Routes from 'routes';
import './styles/index.less';
import '@ant-design/compatible/assets/index.css';
import 'antd/dist/antd.less';
import Demo from 'Demo';

const i18n = localStorage.getItem('i18n') || 'en';
export let country = localStorage.getItem('country') || 'sg';

function App() {
	// eslint-disable-next-line no-unused-vars
	// const [language, setLanguage] = React.useState(i18n);
	return (
		<>
			{/* <Demo /> */}
			<div className="main-wrapper">
				<BrowserRouter>
					<BackTop />
					<Routes country={country} />
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
