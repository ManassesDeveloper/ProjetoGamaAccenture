const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const pagamento = require('./models/pagamento')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/cad-pagamento', function(req, res){
    res.render(__dirname + '/views/layouts/cad-pagamento')
})


/*app.post('/add-pagamento', function(req, res){
    pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        res.send('Pagamento cadastrado com sucesso!')
    }).catch(function(erro){
        res.send('Erro: pagamento não cadastrado!' + erro)
    })
    // res.send('Nome: ' +  req.body.nome + '<br>Valor: ' + req.body.valor + '<br>')
})

*/

app.listen(3000, function(){
    console.log('Servidor sendo executado com sucesso!')
})