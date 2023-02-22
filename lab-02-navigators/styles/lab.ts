import {StyleSheet} from 'react-native';
import {colors} from './colors'

export const lab = StyleSheet.create({
    container: {
        paddingVertical: 16,
    },
    increment: {
        fontSize: 32,
        fontWeight: '800', // bold is not supported on Android
        color: colors.alpha,
        // fontFamily: 'mono',
    },
    title: {
        fontSize: 24,
        letterSpacing: 1,
    },
    rating: {
        marginTop: 8,
    },
    description: {
        marginTop: 8,
        fontSize: 16,
        lineHeight: 24,
        opacity: 0.6,
    }
})