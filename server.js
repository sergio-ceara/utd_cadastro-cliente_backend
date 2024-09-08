const express = require('express');
const app = express();
const env = require('./config/env.js'); 
const db = require('./config/db.config.js');
const router = require('./routes/route.js');
const bodyParser = require('body-parser'); 
const Cliente = db.Cliente;

//const cors = require('cors')
//origin: 'http://localhost:5173',
//origin: 'http://192.168.3.10:5173',
//const corsOptions = {
//    origin: 'http://junction.proxy.rlwy.net:5173',
//    optionsSuccessStatus: 200
//}
//app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/api', router);

const server = app.listen(8080, function () {

    let host = server.address().address
    let port = server.address().port
    console.log("App está rodando no endereço http://%s:%s", host, port); 
});

db.sequelize.sync({force: true}).then(() => {
    console.log('Apaga e recria a tabela usando { force: true }');
    Cliente.sync().then(() => {
        const clientes = [
            { nome: 'Paulo', idade: 23, email: 'paulo@email.com' },
            { nome: 'Sérgio' , idade: 31 ,  email: 'sergio@email.com'},
            { nome: 'Ferreira', idade: 18 ,  email: 'ferreira@email.com'},
            { nome: 'Sousa', idade: 37 ,  email: 'sousa@email.com'}
        ]
    
        clientes.map(cliente =>{
            Cliente.create(cliente);
        });
    })
});        
