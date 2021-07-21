import React, { useEffect,useState }  from 'react'
import { StyleSheet,ImageBackground, Text,View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        descroption: '-',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=d4e2ffa59d2003bd57fc24d1c5277177`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    speed: json.wind.speed
                });
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    
    return(
        <ImageBackground source={require('../rainy.jpg')} style={styles.backdrop}>
           <View style={styles.View}>
            <Text style= {styles.Text} >Zip Code</Text>
            <Text style= {styles.Text1}>{props.zipCode}</Text> 
            <Forecast {...forecastInfo}/>
           </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop:{
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    View:{
        backgroundColor: 'rgb(165, 255, 161)'
    },
    Text:{
        fontSize: 25,
        textAlign: 'center'
    },
    Text1:{
        fontSize: 20,
        color: 'purple',
        textAlign: 'center'}
})