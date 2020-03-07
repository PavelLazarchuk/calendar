import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import CalendarPage from './pages/CalendarPage';

const App = () => {
	return (
		<Provider store={store}>
			<CalendarPage />
		</Provider>
	);
};

export default App;
