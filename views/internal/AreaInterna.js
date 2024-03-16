import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AreaInterna()
{

    const [user,setUser]=useState(null);

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[]);

    return(
        <View>
            <Text> Seja bem vindo {user} </Text>
        </View>
    );
}