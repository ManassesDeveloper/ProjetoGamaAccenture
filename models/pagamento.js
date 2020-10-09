const db = require('./db')
const pagamento = db.sequelize.define('pag',{
    nome: {
        type:db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.INTEGER
    }
})

//Criar tabela
//pagamento.sync({force: true})

module.exports = pagamento