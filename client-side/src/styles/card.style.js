import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';

const robinGreenColor = '#21CD99';
export default StyleSheet.create({
    cardView: {
        width: '86%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 18,
        marginTop: '-21%',
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
    serviceImg: {
        width: 50,
        height: 50,
    },
    serviceImgMargin: {
        margin: 20,
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
    verifyIconSpec: {
        width: 180,
        height: 180,
        alignSelf: 'center',
        marginBottom: 10
    },
    errorMessage: {
        textAlign: 'center',
        color: 'red',
        marginTop: 20
    }
});