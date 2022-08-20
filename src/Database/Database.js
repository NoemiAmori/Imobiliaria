//Importação do plugin SQLite
import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

//Variáveis de conexão/criação do banco de dados 
const database_name = "Imobiliaria.db"; //Nome do banco de dados
const database_version = "1.0"; //Versão do banco de dados
const database_displayname = "Imobiliária - Atv 01"; //Nome de exibição do banco de dados
const database_size = 200000; //tamanho do banco de dados

//atribuição de nome para a classe
export default class Database {

    Conectar() {
        let db;
        return new Promise((resolve) => {
            SQLite.echoTest().then(() => {
                SQLite.openDatabase(database_name, database_version, database_displayname, database_size).then(DB => {
                    db = DB;
                    db.executeSql('SELECT 1 FROM Imovel LIMIT 1').then(() => {
                        console.log("O banco de dados está pronto ... Executando Consulta SQL ...");
                    }).catch((error) => {
                        console.log("O Banco de dados não está pronto ... Criando Dados");
                        db.transaction((tx) => {
                            tx.executeSql('CREATE TABLE IF NOT EXISTS Imovel (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(30), endereco VARCHAR(90), finalidade VARCHAR(30), tipo VARCHAR(30), valor DOUBLE, imagem TEXT)');
                        }).then(() => {
                            console.log("Tabela criada com Sucesso");
                        }).catch(error => {
                            console.log(error);
                        });
                    });
                    resolve(db);
                }).catch(error => {
                    console.log(error);
                });
            }).catch(error => {
                console.log("echoTest Falhou - plugin não funcional");
            });
        });
    }

    //Função para fechar a Conexão com o Banco de dados
    Desconectar(db) {
        if (db) {
            console.log("Fechando Banco de Dados");
            db.close().then(status => {
                console.log("Banco de dados Desconectado!!");
            }).catch(error => {
                console.log(error);
            });
        } else {
            console.log("A conexão com o banco não está aberta");
        }
    };

    // Operações de CRUD
    Listar() {
        return new Promise((resolve) => {
            const lista = [];
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para listar os dados da tabela   
                    tx.executeSql('SELECT * FROM Imovel', []).then(([tx, results]) => {
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            const { id, nome, endereco, finalidade, tipo, valor, imagem } = row;
                            lista.push({ id, nome, endereco, finalidade, tipo, valor, imagem });
                        }
                        console.log(lista);
                        resolve(lista);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    // Função para acrescentar um novo produto na tabela
    Inserir(item) {  
        return new Promise((resolve) => {    
            this.Conectar().then((db) => {      
                db.transaction((tx) => {     
                    //Query SQL para inserir um novo produto   
                    tx.executeSql('INSERT INTO Imovel (nome, endereco, finalidade, tipo, valor, imagem) VALUES (?, ?, ?, ?, ?, ?)', [item.nome, item.endereco, item.finalidade, item.tipo, item.valor, item.imagem]).then(([tx, results]) => { 
                        resolve(results);        
                    });      
                }).then((result) => {        
                    this.Desconectar(db);      
                }).catch((err) => {        
                    console.log(err);      
                });    
            }).catch((err) => {      
                console.log(err);    
            });  
        });  
    }

    //Função para excluir um dado do banco pela id
    Remover(id) {  
        return new Promise((resolve) => {    
            this.Conectar().then((db) => {      
                db.transaction((tx) => {    
                    tx.executeSql('DELETE FROM Imovel WHERE id = ?', [id]).then(([tx, results]) => {          
                        console.log(results);          
                        resolve(results);        
                    });      
                }).then((result) => {        
                    this.Desconectar(db);      
                }).catch((err) => {        
                    console.log(err);      
                });    
            }).catch((err) => {      
                console.log(err);    
            });  
        });  
    }

}