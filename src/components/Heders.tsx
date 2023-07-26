import React from 'react'
import {  Image, useWindowDimensions } from 'react-native';


const Header = () => {
    const windowWidth = useWindowDimensions().width;

    return (
        <Image
        style={[ { width: windowWidth }]} 
        source={require('../../images/heading.png')} />
    )
}

export default Header