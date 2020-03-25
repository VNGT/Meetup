import { StyleSheet } from 'react-native';

const robinGreenColor = '#21CD99';
export default StyleSheet.create({
    safeAreaBottom: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerView: {
        alignItems: "center",
        marginTop: 20,
        marginLeft: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 10,
    },
    fullName: {
        fontSize: 24,
    },
    email: {
        fontSize: 16,
        marginTop: 5,
        color: '#9A8282'
    },
    profileHeaderView: {
        backgroundColor: robinGreenColor,
        marginBottom: 20
    },
    logoutButton: {
        right: 0,
        top: 0,
        position: 'absolute',
        marginTop: 30,
        marginRight: 10,
    }
});