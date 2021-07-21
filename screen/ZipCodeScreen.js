import React , {useEffect,useState }  from 'react'
import { FlatList, Text, TouchableHighlight, View, StyleSheet ,ImageBackground} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Chiangrai', code: '57000'},
    { place: 'Phatthalung' , code: '93000'}
   ]   
   
const ZipItem = ({place,code,navigation}) => (
        <TouchableHighlight onPress={() => navigation.navigate('Weather',{ zipCode: code})}>
            <View>
                <Text style= {styles.Text}>{place}</Text>
                <Text style= {styles.Text1}>{code}</Text>
            </View>
        </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()

    return(
        <ImageBackground source={require('../rainy.jpg')} style={styles.backdrop}>
            <View>
                <FlatList
                    data = {availableZipItems}
                    keyExtracter = {_keyExtractor}
                    renderItem = {({item}) => <ZipItem {...item} navigation={navigation} />}
                />
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
    },
    Text:{
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        paddingTop: 20,
        color: 'orange'
    },
    Text1:{
        fontSize: 10,
        fontStyle: 'italic',
        textAlign: 'center',
        paddingTop: 20,
        color: 'red'
    }
})