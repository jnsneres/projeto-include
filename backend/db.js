const mysql = require('mysql2');
const obterConexao = () => {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });
};

const listarDespesa = (callback) => {
    const conexao = obterConexao();
    conexao.query(
        'SELECT * from tb_despesa',
        (erro, resultado) => {
            console.log('resultado: ${JSON.stringify(resultado)}');
            callback(resultado);
        }
    );
};

const inserirDespesa = (despesas, callback) => {
    const conexao = obterConexao();
    conexao.execute(
        'INSERT INTO tb_despesa(valor_despesa, motivo, situacao) VALUES(?, ?, ?)',
        [despesas.valor_despesa, despesas.motivo, despesas.situacao],
        (erro, resultado) => {
            console.log('resultado: ${JSON.stringify(resultado)}');
            callback(resultado);
        }
    )
}

const atualizarDespesa = (despesas, callback) => {
    const conexao = obterConexao();
    console.log(despesas)
    conexao.execute(
        'UPDATE tb_despesa SET situacao = ? WHERE id_despesa = ?',
        [despesas.situacao, despesas.id_despesa],
        (erro, resultado) => {
            callback(resultado);
        }
    )
}

const listarReceita = (callback) => {
    const conexao = obterConexao();
    conexao.query(
        'SELECT * from tb_receita',
        (erro, resultado) => {
            console.log('resultado: ${JSON.stringify(resultado)}');
            callback(resultado);
        }
    );
};

const inserirReceita = (receitas, callback) => {
    const conexao = obterConexao();
    conexao.execute(
        'INSERT INTO tb_receita(valor_receita) VALUES(?)',
        [receitas.valor_receita],
        (erro, resultado) => {
            console.log('resultado: ${JSON.stringify(resultado)}');
            callback(resultado);
        }
    )
}

const atualizarReceita= (receitas, callback) => {
    const conexao = obterConexao();
    console.log(receitas)
    conexao.execute(
        'UPDATE tb_receita SET valor_receita = ? WHERE id_receita = ?',
        [receitas.valor_receita, receitas.id_receita],
        (erro, resultado) => {
            callback(resultado);
        }
    )
}
module.exports = {
listarDespesa, inserirDespesa, atualizarDespesa, listarReceita, inserirReceita, atualizarReceita
};