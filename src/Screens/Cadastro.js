import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Database from "../Database/Database";
import Imovel from "../Models/Imovel";

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '****',
            endereco: '****',
            finalidade: '****',
            tipo: '****',
            valor: '****',
            imagem: '****',
        }

        //this.CadastrarBanco('Nome', 'Endereço', 'finalidade', 'tipo', 5, 'imagem')
    }

    CadastrarBanco = (nome, endereco, finalidade, tipo, valor, imagem) => {
        const banco = new Database();
        const imoveis = new Imovel(null, nome, endereco, finalidade, tipo, valor, imagem)
        banco.Inserir(imoveis);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ nome: valor }) }} placeholder="Digite o nome do imóvel" />
                <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ endereco: valor }) }} placeholder="Digite o endereço do imóvel" />
                <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ finalidade: valor }) }} placeholder="Digite a finalidade do imóvel" />
                <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ tipo: valor }) }} placeholder="Digite o tipo do imóvel" />
                <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ valor: valor }) }} placeholder="Digite o valor do imóvel" />

                <View style={styles.botao}>


                    <TouchableOpacity onPress={() => this.CadastrarBanco(this.state.nome, this.state.endereco, this.state.finalidade, this.state.tipo, this.state.valor, this.state.imagem)}>
                        <Text style={styles.cadastro}>CADASTRAR</Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <Text> O Imovél será cadastrado com os dados a seguir:</Text>
                    <Text>Nome: {this.state.nome}</Text>
                    <Text>Endereço: {this.state.endereco}</Text>
                    <Text>Finalidade: {this.state.finalidade}</Text>
                    <Text>Tipo: {this.state.tipo}</Text>
                    <Text>Valor: {this.state.valor}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        backgroundColor:'#a8edc0',
        paddingHorizontal: 10

    },

    txtOpcoes:{
        backgroundColor:'white', 
        justifyContent:'center',
        margin: 5,
    },

    cadastro: {
        backgroundColor: '#28bf76',
        textAlign: 'center',
        borderRadius: 20,
        width: 150, 
        padding: 10,
        margin: 5,
        color: 'black', 
        fontWeight: 'bold'
    },

    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    }
})