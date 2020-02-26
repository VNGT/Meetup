import React, { Fragment } from 'react';
import { Platform, StatusBar, SafeAreaView } from 'react-native';
import Navigation from './src/routes/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';

export default App = () => {
	console.disableYellowBox = true;
	return (
		<Fragment>
			<PaperProvider>
				<Navigation/>
			</PaperProvider>
		</Fragment>
	);
};