import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Rastreio(props)
{

    console.log(props);
    return(
        <View>
            <Text> Esse é o componente Rastreio </Text>
            <Button 
                title ='Ir para o Login' 
                onPress={()=>props.navigation.navigate('Login',{
                    id:30
                })}/>
        </View>
    );
}