export default class Imovel {
    constructor (id, nome, endereco, finalidade, tipo, valor, imagem) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.finalidade = finalidade;
        this.tipo = tipo;
        this.valor = valor;
        this.imagem = imagem;
    }
}