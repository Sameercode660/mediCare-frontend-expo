import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalSearchParams } from 'expo-router'


const ServicesAppointment = () => {

    const {id} = useGlobalSearchParams()
    
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}

export default ServicesAppointment