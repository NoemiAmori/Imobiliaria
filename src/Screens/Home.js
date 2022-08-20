import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Home({ navigation }) {

    return (
        <View>
            <View style={styles.botao}>
                <Text style={styles.titulo}>IMOBILIÁRIA - AT 01</Text>
            </View>

            <Button title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
            <Button title="Listagem" onPress={() => navigation.navigate('Listagem')} />


        </View>
    )
}

const styles = StyleSheet.create({

    botao: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo: {
        
        backgroundColor: '#0a8cf0',
        
        borderRadius: 20,
        width: 160,
        padding: 10,
        margin: 5,
        color: 'white',
        fontWeight: 'bold',

    },

})