import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';

export default StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: 'white'
	},
	searchField: {
		marginTop: 20,
		flexDirection: 'row',
	},
	textInput: {
		height: Dimensions.height / 20,
		width: Dimensions.width / 6 * 5,
		marginLeft: '5%'
	},
	title: {
		marginTop: '10%',
		fontWeight: 'bold',
		fontSize: 50,
		marginLeft: '7%'
	},
	recentSearch: {
		marginTop: '10%',
		fontWeight: 'bold',
		fontSize: 20,
		marginLeft: '7%'
	},
	recentList: {
		fontSize: 15,
		borderTopColor: 'black'
	},
	recentItem: {
		fontSize: 18,
		marginLeft: '7%',
		color: '#CED0CE',
		fontWeight: 'bold',
		marginBottom: '5%',
		marginTop: '5%'
	},
	renderSeperator: {
		height: 1,
		width: '94%',
		backgroundColor: '#CED0CE',
		marginLeft: '3%'
	},
	separator: {
		height: 1,
		width: '96%',
		backgroundColor: '#CED0CE',
		marginLeft: '2%',
		marginTop: '3%'
	}

});