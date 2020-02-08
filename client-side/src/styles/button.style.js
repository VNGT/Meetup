import { StyleSheet } from 'react-native';
const robinGreenColor = '#21CD99';

export default StyleSheet.create({
    welcomeSignInSpec: {
        marginTop: 30,
        width: '78%',
        height: 43,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: robinGreenColor,
    },
    whiteView: {
        backgroundColor: 'white'
    },
    greenButtonSpec: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6
    },
    textColorGreen: {
        color: robinGreenColor,
    },
    textColorWhite: {
        color: 'white',
    },
    robinGreenColor: {
        backgroundColor: robinGreenColor,
    },
    buttonSpec: {
        backgroundColor: robinGreenColor,
        width: '90%',
        alignSelf: 'center',
        height: 43,
        marginBottom: 30,
        marginTop: 30,
    },
    buttonTextSpec: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
    },
});