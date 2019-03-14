const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const server = require('./route/server')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/server', server)

const port = process.env.port || 5050;

app.listen(port, () => {
    console.log(`The magic happens at PORT ${port}`)
});