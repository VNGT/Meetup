import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    eventDetailView: {
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        width: '98%',
    },
    leftSide: {
        width: '30%',
        alignItems: 'center',
    },
    middleSide: {
        width: '55%',
        marginLeft: 5,
	},
	rightSide: {
		width: '15%',
		alignItems: "center",
		alignSelf: "center"
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
    smallTitleBold: {
        fontSize: 12,
        fontWeight: '300',
        marginTop: 2,
        fontWeight: 'bold'
    },
    breakLine: {
        width: '60%',
        height: '1%',
        marginTop: 20,
        backgroundColor: 'black',
        alignSelf: 'center',
        opacity: 0.2,
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
        height: '94.3%',
        marginTop: 10,
        alignSelf: 'center'
    },
    safeAreaBottom: {
        flex: 1,
        backgroundColor: 'white'
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