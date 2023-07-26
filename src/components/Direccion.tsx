import React from 'react'
import { View, Image } from 'react-native'
import MapPin from '../../icons/MapPin'
import Contenido from '../Tipografia/Contenido'
import { AddressInfoProps } from '../Interfaces/AddressInfoProps'
import { colors } from '../styles/Colors'

const Direccion = ({ address }: AddressInfoProps) => {
    return (
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <MapPin />
            <Contenido style={{ marginStart: 16, color: colors.gray3 }}>{address}</Contenido>
        </View>
    )
}
export default Direccion