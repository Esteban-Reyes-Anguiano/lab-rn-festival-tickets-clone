import React from 'react'
import { SimilarEvent } from '../Interfaces/SimilarEvent'
import { Alert, FlatList, View } from 'react-native'
import EventosSimilares from './EventosSimilarEstilo'
import H2 from '../Tipografia/H2'

const events: SimilarEvent[] = [
    {
        id: 1,
        image: require('../../images/first-card.png'),
        title: 'PEPE Y TEO - STAND UP',
        dateTime: 'Junio Jueves 11 | 9:00 pm',
        price: "$300"

    },
    {
        id: 2,
        image: require('../../images/first-card.png'),
        title: 'PEPE Y TEO - STAND UP',
        dateTime: 'Junio Martes 11 | 9:00 pm',
        price: "$300"

    }
]

const SimilarEvents = () => {
    return (
        <View >
            <H2 bold style={{ marginHorizontal: 16, marginVertical: 15 }}>Eventos Similares</H2>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{ width: '100%' }}
                data={events}
                contentContainerStyle={{ paddingHorizontal: 8 }}
                renderItem={({ item }) => <EventosSimilares item={item} onItemPress={() => Alert.alert(item.title, item.dateTime, [{text:'Cerrar'}])}/>}
                keyExtractor={(item, index) => item.id.toString()}
            />
        </View>
    )
}

export default SimilarEvents