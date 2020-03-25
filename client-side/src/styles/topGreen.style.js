import { StyleSheet } from 'react-native';

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
    bannerImageSpec: {
        width: '75%',
        height: 250,
        alignSelf: 'center'
    },
});