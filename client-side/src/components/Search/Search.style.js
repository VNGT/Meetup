import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
	topSafe: {
		flex: 0,
		backgroundColor: 'white',
    },
    bottomSafe: {
		flex: 1,
		backgroundColor: 'white',
	},
	searchField: {
		marginTop: 20,
		flexDirection: 'row',
		width: '75%',
		backgroundColor: '#D8D8D8',
		marginLeft: '7%',
		borderRadius: 5,
	},
	colSizeSm: {
		width: '10%',
		justifyContent: 'center',
		marginLeft: 5,
	},
	colSizeLg: {
		width: '78%',
		justifyContent: 'center',
	},
	searchTextSpec: {
		fontSize: Platform.OS === 'ios' ? 30 : 23,
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
    smallTitleBold: {
        fontSize: 12,
        fontWeight: '300',
        marginTop: 2,
        fontWeight: 'bold'
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
	},
	dataView: {
        borderRadius: 5,
        borderWidth: 0.8,
        borderColor: '#C3C3C3',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        width: '97%',
        height: '95.3%',
        marginTop: 10,
        alignSelf: 'center'
    },
    bigTitle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    smallTitle: {
        fontSize: 12,
        fontWeight: '300',
        marginTop: 2,
    },
    eventDetailView: {
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        width: '98%',
    },
    leftSide: {
        width: '25%',
        alignItems: 'center',
    },
    middleSide: {
        width: '55%',
        marginLeft: 15,
	},
	rightSide: {
		width: '20%',
		alignItems: "center",
		alignSelf: "center"
	},
    breakLine: {
        width: '60%',
        height: '1%',
        marginTop: 20,
        backgroundColor: 'black',
        alignSelf: 'center',
        opacity: 0.2,
    },
    loadingText: {
        textAlign: 'center',
        marginTop: '6%'
    },
    noDataText: {
        textAlign: 'center',
        marginTop: '6%',
        fontSize: 30,
        fontWeight: '100'
    }
});