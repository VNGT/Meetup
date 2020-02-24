import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';

const robinGreenColor = '#21CD99';
export default StyleSheet.create({
    profileHeaderView: {
        backgroundColor: robinGreenColor,
        marginBottom: 20
    },
    headerView: {
        alignItems: "center",
        marginTop: 20,
        marginLeft: 20,
    },
    fullName: {
        fontSize: 24,
    },
    email: {
        fontSize: 16,
        marginTop: 5,
        color: '#9A8282'
    },
    cardView: {
        width: '86%',
        backgroundColor: robinGreenColor,
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
    robinGreenColor: {
        backgroundColor: '#21CD99',
    },
    welcomeOrService: {
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 20
    },
    verifyPasscodeTextTitle: {
        color: robinGreenColor,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: 'center'
    },
    verifyPasscodeSubtitle: {
        color: '#C3C3C3',
        textAlign: 'center',
        fontSize: 13,
        marginBottom: 20
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100, 
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 10,
    }
});