import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation}) {

    return (
        <View>
            <Text>Imobiliária - Atv 01</Text>

            <Button title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
            <Button title="Listagem" onPress={() => navigation.navigate('Listagem')} />


        </View>
    )
}

