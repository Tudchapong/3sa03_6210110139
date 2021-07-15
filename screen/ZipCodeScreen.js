import React from 'react'
import { FlatList, Text, View } from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]   

const ZipItem = ({place,code,navigation}) => (
    <View>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <View>
         <FlatList
            data = {availableZipItem}
            keyExtracter = {_keyExtractor}
            renderItem = {({item})=> <ZipItem{...item} navigation={navigation} />}
         />
         <StausBar style="auto">
        </View>
    
    )
}