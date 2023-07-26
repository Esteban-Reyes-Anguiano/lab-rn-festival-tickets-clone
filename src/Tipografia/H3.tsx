import React, { Children } from 'react'
import { Text } from 'react-native'
import { typoStyles } from '../styles/Styles'
import { Tipos } from '../interfaces/Tipos'

const H3 = ({ style, children, bold }: Tipos) => {
    return (
        <Text style={[typoStyles.h3, style, { fontWeight: bold ? 'bold' : 'normal' }]}>{children}</Text>
    )
}

export default H3