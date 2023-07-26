import React from 'react'
import { Alert, Image, ScrollView, Text, View, useWindowDimensions } from 'react-native'
import { styles } from '../styles/Styles'
import Header from './Heders'
import Tab from './Tab'
import H1 from '../Tipografia/H1'
import H2 from '../Tipografia/H2'
import { colors } from '../styles/Colors'
import TiempoInfo from './TiempoInfo'
import Direccion from './Direccion'
import OrganizacionInfo from './OrganizacionInfo'
import Contenido from '../Tipografia/Contenido'
import BottomButton from './BottonButton'
import Eventos from './Eventos'

const Info = () => {

    const windowWidth = useWindowDimensions().width;

    return (
        <View style={styles.container}>
            <Header />
            <View style={{ flex: 2 }}>
                <Tab />
                <ScrollView
                    style={{ flex: 1 }}
                >
                    <View style={{ paddingHorizontal: 16 }}>
                        <H2 bold style={{ color: colors.accentText, marginVertical: 7 }}>$300</H2>
                        <H1 bold>Binacional Vs UTC | Apertura 2020 - Fecha 4</H1>
                        <View style={{ height: 80, justifyContent: 'space-between', marginVertical: 20 }}>
                            <TiempoInfo date='sábado 24 de diciembre' time='8:00 pm' />
                            <Direccion address='Alberto Gallardo Rimac 2304' />
                        </View>
                        <OrganizacionInfo icon={require('../../images/Ellipse1.png')} title='Organizer SAC.' />
                        <H2 bold style={{ color: colors.accentText, marginVertical: 7 }}>¡No te puedes perder este día histórico para nuestra región!</H2>

                        <Contenido style={{ marginTop: 20, color: colors.gray2 }}>
                            Celebra la historia este viernes con nosotros!
                            El estadio Guillermo Briceño Rosamedina se iluminará con emoción y pasión mientras inauguramos las esperadas luces, gracias a la increíble gestión de nuestra junta directiva.
                            Es hora de vivir la emoción del fútbol en su máxima expresión. ¡El duelo por la fecha 4 de la Liga 1 nos espera y necesitamos tu presencia para hacer de este evento algo inolvidable!

                        </Contenido>
                        <Contenido style={{ marginTop: 20, color: colors.gray2 }}>
                            Marca el calendario, invita a tus amigos y únete a la fiesta del deporte. La adrenalina estará en su punto más alto y juntos haremos historia.
                            ¡No esperes más! Asegura tu lugar y sé parte de este momento trascendental para nuestra región. ¡Te esperamos con los brazos abiertos!

                        </Contenido>
                        <Contenido style={{ marginTop: 20, color: colors.gray2 }}>
                            ¡Te garantizamos que será una noche épica llena de emociones y victoria!
                            #VamosEquipo #FútbolHistórico #LucesEncendidas #PasiónPorElDeporte
                        </Contenido>
                    </View>
                    <Image
                        style={[{ width: windowWidth }]}
                        source={require('../../images/map.png')}
                    />
                    <Eventos />
                    <BottomButton title='Comprar Boleto' onPress={() => Alert.alert('Felicidades', 'Te esperamos este 24 de diciembre', [{ text: 'Aceptar' }])} />

                </ScrollView>
            </View>
        </View>
    )
}

export default Info