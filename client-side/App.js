import React, { Fragment } from 'react';
import Navigation from './src/routes/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider }  from 'react-redux';
import store from './src/store';

export default App = () => {
	console.disableYellowBox = true;
	return (
		<Provider store={store}>
			<Fragment>
				<PaperProvider>
					<Navigation/>
				</PaperProvider>
			</Fragment>
		</Provider>
	);
};