import React, { useState }  from 'react'
import { StyleSheet,ImageBackground, Text } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        descroption: '-',
        temp: 0
    })
    return(
        <ImageBackground source={require('../rainy.jpg')} style={styles.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop:{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
})