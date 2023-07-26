import React, { Children } from 'react'
import { Text } from 'react-native'
import { typoStyles } from '../styles/Styles'
import { Tipos } from '../interfaces/Tipos'

const H2 = ({ style, children, bold }: Tipos) => {
    return (
        <Text style={[typoStyles.h2, style, { fontWeight: bold ? 'bold' : 'normal' }]}>{children}</Text>
    )
}

export default H2