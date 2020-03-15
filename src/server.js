const express = require('express');

const app = require('./app');

const server = express();

server.use(app);
server.listen(3000,  () => {
    console.log('Server is running in port 3333')
});