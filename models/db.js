const Sequelize = require('sequelize')
const sequelize = new Sequelize('celke','root','carlanovaes99',{
    host: 'localhost',
    dialect: 'mysql'
})



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}












/*sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(err){
    console.log('Falha ao se conectar!: ' + err)
})
*/
