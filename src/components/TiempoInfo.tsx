import React from 'react'
import { View, Image } from 'react-native'
import Date from '../../icons/Date'
import Contenido from '../Tipografia/Contenido'
import { DateTimeInfoProps } from '../interfaces/DateTimeInfoProps'
import { colors } from '../styles/Colors'

const DateTimeInfo = ({ date, time }: DateTimeInfoProps) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Date />
            <View style={{ marginStart: 16 }}>
                <Contenido style={{ marginBottom: 10, color: colors.gray3 }}>{date}</Contenido>
                <Contenido style={{ color: colors.gray3 }}>{time}</Contenido>
            </View>
        </View>
    )
}

export default DateTimeInfo