import React, { Fragment } from 'react';
import { Platform, StatusBar, SafeAreaView } from 'react-native';
import Navigation from './src/routes/Navigation';
import glStyle from './src/styles/global.style';
import { Provider as PaperProvider } from 'react-native-paper';

export default App = () => {
	console.disableYellowBox = true;
	return (
		<Fragment>
			<PaperProvider>
				<SafeAreaView style={glStyle.topSafe}/>
				<SafeAreaView style={glStyle.bottomSafe}>
					{ Platform.OS === 'ios' && <StatusBar barStyle='dark-content' /> }
					<Navigation/>
				</SafeAreaView>
			</PaperProvider>
		</Fragment>
	);
};