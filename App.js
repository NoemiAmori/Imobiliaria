import React, { Component } from "react";
import { View, Text } from "react-native";

import Database from "./src/Database/Database";
import Imovel from "./src/Models/Imovel";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaImoveis: []
    }

    this.ListarBanco();
    this.CadastrarBanco('Nome', 'Endereço', 'finalidade', 'tipo', 5, 'imagem')
  }


  ListarBanco = () => {
    const banco = new Database();
    banco.Listar().then(lista => { this.setState({ listaImoveis: lista }) })
  }

  CadastrarBanco = (nome, endereco, finalidade, tipo, valor, imagem) => {
    const banco = new Database();
    const imoveis = new Imovel(nome, endereco, finalidade, tipo, valor, imagem)
    banco.Inserir(imoveis);
  }

  render() {
    return (
      <View>
        <Text>Imobiliária - Atv 01</Text>

        {
          this.state.listaImoveis.map(
            item => (
              <Text>
                {item.id}
                {item.nome}
                {item.endereco}
                {item.finalidade}
                {item.tipo}
                {item.valor}
                {item.imagem}</Text>

            )
          )
        }
      </View>
    )
  }
}