const express = require('express');
const server = express();

server.get('/', (req, res) => res.sendFile(__dirname + "/public/www/index.html"));

server.use(express.static(__dirname + '/public/www/'));

server.listen(3000, () => console.log('up and serving your front end on port 80'));
