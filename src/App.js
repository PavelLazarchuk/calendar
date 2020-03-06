import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import CalendarPage from './pages/CalendarPage';

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<CalendarPage />
			</BrowserRouter>
		</Provider>
	);
};

export default App;
