import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Forecast(props){
    return(
        <View style={styles.View}>
            <Text style={styles.Text}>{props.main}</Text>
            <Text style={styles.Text1}>{props.description}</Text>
            <Text style={styles.Text1}>{props.temp} °C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    View:{
        backgroundColor: 'green'
    },
    Text:{
        fontSize: 23,
        color: 'red',
        textAlign: 'center'
    },
    Text1: {
        fontSize: 20,
        color: 'darkgreen',
        textAlign: 'center'
    }
})