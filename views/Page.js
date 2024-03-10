import React from "react";
import { View, Text } from "react-native";
import { css } from "../assets/CSS/Css";
export default function Page(props)
{
    return (
        <View style={css.textPage}>
            <Text>O nome da empresa é {props.empresa} e seu funcionario {props.name}.
            Comprou o produto {props.produto} na seguinte quantidade {props.quantidade}
            </Text>
        </View>
    )
}

