import React, { Fragment } from 'react';
import { Platform, StatusBar} from 'react-native';

export default App = () => {
	console.disableYellowBox = true;

	return (
		<Fragment>
			{ Platform.OS === 'ios' && <StatusBar barStyle='dark-content' /> }
		</Fragment>
	);
};