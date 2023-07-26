import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/Styles'
import { colors } from '../styles/Colors'
import Paragraph from '../Tipografia/Contenido'

const Tab = () => {
    return (
        <View style={styles.tab}>
            <View style={styles.focusTabItem}>
                <Paragraph style={{ color: colors.accentText }}>Info</Paragraph>
                <View style={{ height: 1, width: '100%', backgroundColor: colors.accentText }} />
            </View>
            <Paragraph style={{ color: colors.accentText }}>Precios</Paragraph>
            {/* <View style={{ height: 1, width: '100%', backgroundColor: colors.accentText }} /> */}

        </View>
    )
}

export default Tab