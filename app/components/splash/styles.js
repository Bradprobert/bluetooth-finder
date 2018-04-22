import {StyleSheet} from 'react-native'
import {colors} from '../../constants/colors'
import {fonts} from '../../constants/fonts'
import {fontSizes} from '../../constants/fontSizes'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    splashTitle: {
        color: colors.white,
        fontSize: fontSizes.splashTitle,
        fontFamily: fonts.appName,
    }
});

