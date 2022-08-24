import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button, Touchable } from "react-native";

export default class ItemImovel extends Component {

    verificarRemover() {
        if (this.props.remover) {
            return (

                <View style={styles.lixeira}>
                    <Button title="Remover" onPress={() => { this.props.remover(this.props.id) }} />
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imagem}>
                    <Image
                        style={styles.imagem}
                        source={{ uri: this.props.imagem }} />
                </View>
                <View style={styles.campos}>
                    <Text>Id: {this.props.id}</Text>
                    <Text>Nome: {this.props.nome}</Text>
                    <Text>Endereço: {this.props.endereco}</Text>
                    <Text>Finalidade: {this.props.finalidade}</Text>
                    <Text>Tipo: {this.props.tipo}</Text>
                    <Text>Valor: {this.props.valor}</Text>
                </View>

                {this.verificarRemover()}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },

    imagem: {
        flex: 1,
        width: 100,
        height: 80,
    },

    campos: {
        flex: 1,
    },

    lixeira: {
        flex: 1
    }
})