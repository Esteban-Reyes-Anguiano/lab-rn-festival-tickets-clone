import React from 'react'
import { BottomButtonProps } from '../Interfaces/BottomButtonProps'
import { Pressable, TouchableOpacity } from 'react-native'
import Paragraph from '../Tipografia/Contenido'
import { colors } from '../styles/Colors'
import { styles } from '../styles/Styles'

const BottomButton = (props: BottomButtonProps) => {
    return (
        <TouchableOpacity
            {...props}
            style={styles.bttomButton}
        >
            <Paragraph bold style={{ color: colors.white }}>{props.title}</Paragraph>
        </TouchableOpacity>
    )
}

export default BottomButton