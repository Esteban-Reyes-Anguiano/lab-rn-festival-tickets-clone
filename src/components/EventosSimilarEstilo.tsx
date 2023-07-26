import React from 'react'
import { SimilarEventCardProps } from '../Interfaces/SimilarEventCardProps'
import { Image, Pressable, View } from 'react-native'
import Contenido from '../Tipografia/Contenido'
import { colors } from '../styles/Colors'
import Heart from '../../icons/Heart'
import { styles } from '../styles/Styles'

const SimilarEventCard = ({ item, onItemPress }: SimilarEventCardProps) => {
    return (
        <Pressable 
        onPress={onItemPress}
        style={styles.similarEventItem}>
            <Image
                style={{ width: '100%' }}
                source={item.image}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginBottom: 15 }}>
                <Contenido bold>{item.title}</Contenido>
                <Heart />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                <Contenido style={{ color: colors.gray3 }}>{item.dateTime}</Contenido>
                <Contenido bold>{item.price}</Contenido>
            </View>
        </Pressable>
    )
}

export default SimilarEventCard