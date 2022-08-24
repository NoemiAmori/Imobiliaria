import React, { Component } from "react";
import { View, Text } from "react-native";

import Database from "../Database/Database";

import ItemImovel from "../Components/ItemImovel";

export default class Listagem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaImoveis: []
        }

        this.ListarBanco();
    }

    ListarBanco = () => {
        const banco = new Database();
        banco.Listar().then(lista => { this.setState({ listaImoveis: lista }) })
    }

    RemoverBanco = (id) => {
        const banco = new Database();
        banco.Remover(id);
        this.ListarBanco();
}

    render() {
        return (
            <View style={{flex: 1}}>
                {
                    this.state.listaImoveis.map(
                        item => (
                           <ItemImovel 
                           key={item.id}
                           id={item.id}
                           nome={item.nome}
                           endereco={item.endereco}
                           finalidade={item.finalidade}
                           tipo={item.tipo}
                           valor={item.valor}
                           imagem={item.imagem}
                           remover={this.RemoverBanco}
                           />     
                              

                        )
                    )
                }
            </View>
        )
    }
}
