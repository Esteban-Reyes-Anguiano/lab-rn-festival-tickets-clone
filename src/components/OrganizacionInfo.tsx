import React from 'react'
import { OrganizerInfoProps } from '../interfaces/OrganizerInfoProps'
import { Image, View } from 'react-native'
import Contenido from '../Tipografia/Contenido'

const OrganizerInfo = ({ title, icon }: OrganizerInfoProps) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                resizeMode='contain'
                style={{ height: 16, width: 16, marginEnd: 16 }}
                source={icon}
            />
            <Contenido bold>{title}</Contenido>
        </View>
    )
}

export default OrganizerInfo