
// Importa los módulos necesarios
const express = require('express');
const RED = require('node-red');

// Crea una aplicación Express
const app = express();

// Redirige a HTTPS
app.get('*', function(req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect('https://' + req.headers.host + req.url);
  } else {
    next();
  }
});

// Configura Node-RED
const settings = require('./settings.js');
const httpAdmin = require('node-red/lib/httpadmin');
const httpNode = require('node-red/lib/httpnode');
RED.init(server, settings);

// ... Configuración adicional de Node-RED ...

// Inicia el servidor HTTP
const server = http.createServer(app);
server.listen(PORT);

// Inicia Node-RED
RED.start();

  