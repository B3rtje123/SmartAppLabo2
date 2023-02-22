import { ParamListBase, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { Button, View, Text } from 'react-native'
import Lab from '../../interfaces/Lab'
import { container } from '../../styles/container'
import { lab as labStyles } from '../../styles/lab'

export default (props: any) => {
    const { navigate, setOptions, goBack } = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
    //TODO: van de gegevens van de params op (lab)
    console.log(props.route.params)
    const { lab, count }: {lab: Lab; count:number} = props.route.params

    //voer deze functie uit als....
    useEffect(() => {
        setOptions({title: lab.title})
        //iets in deze array veranderd
    }, [lab])

    setOptions({title: lab.title})
    return (
        <View style={container.generic}>
            <Text style={labStyles.increment}>{count}</Text>
            <Text style={labStyles.title}>{lab.title}</Text>
            <Text style={labStyles.description}>{lab.description}</Text>
            <Text style={labStyles.rating}>{'🥐'.repeat(lab.rating)}</Text>
            
            <Button title="I wanna go home" onPress={()=>goBack()} />
        </View>
    )
}