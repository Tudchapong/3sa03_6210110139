import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text style={styles.Text}>{props.main}</Text>
            <Text style={styles.Text0}>detail : {props.description}</Text>
            <Text style={styles.Text1}>temperature : {props.temp} °C</Text>
            <Text style={styles.Text2}>wind speed : {props.speed} m/s</Text>
            <Text style={styles.Text}>wind degree : {props.degree}</Text>
            <Text style={styles.Text0}>pressure : {props.pressure} hPa</Text>
            <Text style={styles.Text1}>humidity : {props.humidity} %</Text> 
            <Text style={styles.Text}>clouds : {props.clouds} %</Text>
            <Text style={styles.Text0}>visibility : {props.visibility/1000} km</Text>
            <Text style={styles.Text}>country : {props.country}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text:{
        fontSize: 20,
        color: 'red',
        textAlign: 'center'
    },
    Text0:{
        fontSize: 20,
        color: 'rgb(165, 100, 200)',
        textAlign: 'center'
    },
    Text1: {
        fontSize: 20,
        color: 'darkgreen',
        textAlign: 'center'
    },
    Text2: {
        fontSize: 20,
        color: 'rgb(50, 0, 255)',
        textAlign: 'center'
    }
})