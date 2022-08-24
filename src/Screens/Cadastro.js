import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { RNCamera } from "react-native-camera";

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

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            this.setState({imagem: data.uri})
        }
    };

    render() {
        return (
            <ScrollView style={styles.form}>
                <View style={{ flex: 1 }}>
                    <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ nome: valor }) }} placeholder="Digite o nome do imóvel" />
                    <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ endereco: valor }) }} placeholder="Digite o endereço do imóvel" />
                    <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ finalidade: valor }) }} placeholder="Digite a finalidade do imóvel" />
                    <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ tipo: valor }) }} placeholder="Digite o tipo do imóvel" />
                    <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ valor: valor }) }} placeholder="Digite o valor do imóvel" />
                </View>
                <View style={styles.container}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onGoogleVisionBarcodesDetected={({ barcodes }) => {
                            console.log(barcodes);
                        }}
                    />
                </View>

                <View style={styles.botao}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)}>
                        <Text style={{ fontSize: 14 }}> Tirar Foto </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.CadastrarBanco(this.state.nome, this.state.endereco, this.state.finalidade, this.state.tipo, this.state.valor, this.state.imagem)}>
                        <Text style={styles.cadastro}>CADASTRAR</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center' }}> O Imovél será cadastrado com os dados a seguir:</Text>
                    <ItemImovel
                        nome={this.state.nome}
                        endereço={this.state.endereco}
                        finalidade={this.state.finalidade}
                        tipo={this.state.tipo}
                        valor={this.state.valor}
                        imagem={this.state.imagem}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#a8edc0',
        paddingHorizontal: 10,
        flex: 1
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
        fontWeight: 'bold',
        flex: 1, 
        marginTop: 100
    },

    container: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 50,
    },
    preview: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
})