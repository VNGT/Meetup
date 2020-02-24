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
		marginTop: '5%',
		fontSize: 15,
		marginLeft: '7%',
		borderTopColor: 'black',
		marginVertical: 8,
		marginHorizontal: 16,
	},
	recentItem: {
		fontSize: 15,
		padding: 10
	}

});