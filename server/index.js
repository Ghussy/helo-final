require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const controller = require('./controller');
const massive = require('massive')

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());


//--------------- ENDPOINTS -------------------------- //
app.post('/create-user', controller.createUser)
app.post('/login', controller.login)





massive(CONNECTION_STRING).then( (db) => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port: ${SERVER_PORT}`)
    })
})