import React, { Children } from 'react'
import { Text } from 'react-native'
import { typoStyles } from '../styles/Styles'
import { Tipos } from '../interfaces/Tipos'

const Contenido = ({ style, children, bold }: Tipos) => {
    return (
        <Text style={[typoStyles.paragraph, style, { fontWeight: bold ? 'bold' : 'normal' }]}>{children}</Text>
    )
}

export default Contenido