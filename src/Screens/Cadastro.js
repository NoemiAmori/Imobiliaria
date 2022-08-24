import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ItemImovel from "../Components/ItemImovel";

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
            imagem: '',
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
                    <Text style={{textAlign: 'center'}}> O Imovél será cadastrado com os dados a seguir:</Text>
                    <ItemImovel
                        nome={this.state.nome}
                        endereço={this.state.endereco}
                        finalidade={this.state.finalidade}
                        tipo={this.state.tipo}
                        valor={this.state.valor}
                        imagem={this.state.imagem}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#a8edc0',
        paddingHorizontal: 10

    },

    txtOpcoes: {
        backgroundColor: 'white',
        justifyContent: 'center',
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