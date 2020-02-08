import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';

const robinGreenColor = '#21CD99';
export default StyleSheet.create({
    topGreenRectangleView: {
        backgroundColor: robinGreenColor,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50
    },
    titleView: {
        marginTop: 20,
        marginLeft: 20
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20,
        marginTop: 5,
        color: '#9A8282'
    },
    cardView: {
        width: '86%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 18,
        marginTop: '-21%',
    },
    loginView: {
        backgroundColor: '#C3C3C3',
        height: '100%'
    },
    inputItemSpec: {
        width: '90%',
        height: 50,
        backgroundColor: '#E7E3E3',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    textInputSpec: {
        fontSize: 20,
        marginLeft: 15,
        width: '75%',
        textAlign: 'left'
    },
    buttonSpec: {
        backgroundColor: robinGreenColor,
        width: '90%',
        alignSelf: 'center',
        height: 43,
        marginBottom: 20,
        marginTop: 30,
    },
    buttonTextSpec: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
    },
    forgetPasswordSpec: {
        color: robinGreenColor,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    fieldIcon: {
        fontSize: 30,
    },
    connectView: {
        alignSelf: 'center',
        margin: 40,
        flexDirection: 'row'
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 95
    },
    connectText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        marginTop: -10
    },
    thirdPartyServiceView: {
        width: '85%',
        backgroundColor: '#D8D8D8',
        alignSelf: 'center',
        borderRadius: 15
    },
    serviceImg: {
        width: 50,
        height: 50,
    },
    serviceRowSpec: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    serviceImgMargin: {
        margin: 20,
    },
    haveAccountYetView: {
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
    },
    haveAccountYetTextSpec0: {
        fontWeight: 'bold'
    },
    haveAccountYetTextSpec1: {
        fontWeight: 'bold',
        color: 'blue'
    },
    welcomeView: {
        backgroundColor: '#C3C3C3',
        height: '100%'
    },
    bannerImageSpec: {
        width: '75%',
        height: 250,
        alignSelf: 'center'
    },
    welcomeTitleSpec: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 5,
    },
    welcomeSubTitleSpec: {
        fontSize: 14,
        textAlign: 'center',
        color: '#A6A1A1'
    },
    welcomeSignInSpec: {
        marginTop: 30,
        width: '78%',
        height: 43,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#21CD99',
    },
    robinGreenColor: {
        backgroundColor: '#21CD99',
    },
    whiteView: {
        backgroundColor: 'white'
    },
    textColorWhite: {
        color: 'white',
    },
    textColorGreen: {
        color: '#21CD99',
    },
    greenButtonSpec: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6
    },
    welcomeOrService: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    }
});