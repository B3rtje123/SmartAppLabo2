import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Button, View, Text, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import labs from '../../assets/data/labs.json'
import  Lab  from '../../interfaces/Lab'
import { container } from '../../styles/container'
import {lab} from '../../styles/lab'

export default ()  => {
    let count = 0
    
    console.log(count);
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
    //stap1: haal iets uit het object
    //stap2: geef aan wat het is
    const showLab = ({item}: {item: Lab}) => { //renderItem MOET ALTIJD "item" noemen
        //TODO: styling 
        //TODO: increment per lab
        //TODO: link naar detail
        console.log(item)
        count++
        const localCount: string = count.toString().padStart(2, '0')
        return (
            <Pressable onPress={() => {
                navigate('Detail', {lab: item, count: localCount})
            }} style={lab.container}>
                <Text style={lab.increment}>{localCount}</Text>
                <Text style={lab.title}>{item.title}</Text>
                <Text style={lab.rating}>{'🥐'.repeat(item.rating)}</Text>
            </Pressable>
        )
    }
    return (
        <View style={container.generic}>
            <FlatList data={labs} renderItem={showLab}/>
        </View>
    )
}