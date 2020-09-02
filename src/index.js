const express = require("express");
const path = require("path");
const morgan = require("morgan");
const router = require("./routes/route");
const bodyParser = require("body-parser");

// Inicializando aplicación
app = express();

// Variable que contiene el número del puerto del servidor
const PORT = 3000;

// Configuraciones
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.use('/', router);
app.use('/add', router);
app.use('/contact', router);

// Archivos estaticos
app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, function() {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});