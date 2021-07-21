import React from 'react'
import { FlatList, Text, TouchableHighlight, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import WeatherScreen from './WeatherScreen'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Chiangrai', code: '57000'}
   ]   

const ZipItem = ({place,code,navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather',{ zipCode: code})}>
        <View>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <View>
         <FlatList
            data = {availableZipItems}
            keyExtracter = {_keyExtractor}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation} />}
         />
         
        </View>
    
    )
}

const styles = StyleSheet.create({
    ZipItem:{
        flex: 1
    },
    zipCode:{
        flex: 1
    },
    zipPlece:{
        flex: 1
    },
    Text:{
        fontSize: 25,
        textAlign: 'right',
        paddingTop: 35,
        color: 'red'
    }
})