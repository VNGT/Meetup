import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safeAreaBottom: {
        flex: 1,
        backgroundColor: '#C3C3C3',
    },
    safeAreaTop: {
        flex: 0,
        backgroundColor: '#21CD99'
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
    loginView: {
        backgroundColor: '#C3C3C3',
        height: '100%'
    },
});