import React, { useState }  from 'react'
import { ImageBackground, Text } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        descroption: '-',
        temp: 0
    })
    return(
        <ImageBackground source={require('rainy.jpg')} style={styles.backdrop}>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop:{
        width: '100%',
        height: '100%'
    }
})