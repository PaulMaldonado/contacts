const mysql = require("mysql");

// Conectando base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contacts_express'
});

// Comprobando si existe una conexión
db.connect(function(error) {
  if(error) throw error;

  console.log("Conexión exitosa a la base de datos");
});

module.exports = db;