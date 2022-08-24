import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../image/imobiliaria.jpg')} style={styles.imageBackground}>
                

                <TouchableOpacity
                    onPress={() => navigation.navigate('Cadastro')} >
                <Text style={{ fontWeight: 'bold', marginTop: 2, color:'black', fontSize: 20}}>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={() => navigation.navigate('Listagem')} >
                <Text style={{ fontWeight: 'bold', marginEnd: 2, color: 'black', fontSize: 20 }}>Listagem</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>IMOBILIÁRIA - ATV 01</Text>
        
        </ImageBackground>


        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },

    titulo: {
       
        padding: 100,
        marginTop: 80,
        color: 'white',
        fontWeight: 'bold',
    },

})