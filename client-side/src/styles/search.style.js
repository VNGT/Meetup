import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';

export default StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: 'white',
	},
	searchField: {
		marginTop: 20,
		flexDirection: 'row',
		width: '75%',
		backgroundColor: '#D8D8D8',
		marginLeft: '7%',
		height: '5%',
		borderRadius: 5,
	},
	colSizeSm: {
		width: '10%',
		justifyContent: 'center',
		marginLeft: 5,
	},
	colSizeLg: {
		width: '78%',
		marginLeft: 3,
		justifyContent: 'center',
	},
	searchTextSpec: {
		fontSize: 23,
	},
	clearSpec: {
		marginLeft: -5,
		color: '#c3c3c3',
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
	},
	result: {
		fontSize: 18,
		marginLeft: '7%',
		marginTop: '5%',
		color: 'red'
	}

});