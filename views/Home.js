import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {css} from '../assets/CSS/Css'
export default function Home(props)
{

    console.log(props);
    return(
        <View style={css.container2}>

            <TouchableOpacity style={css.button__home}
            onPress={()=>props.navigation.navigate('Login',{id:30})}>
                <Image source={require('../assets/img/user3.png')} />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>props.navigation.navigate('Rastreio')}>
                <Image source={require('../assets/img/box3.png')} />
            </TouchableOpacity>

        </View>
    );
}