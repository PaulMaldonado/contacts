const express = require("express");
const router = express.Router();
const db = require("../database/db");

// Ruta principal
router.get('/', (req, res) => {
  res.render('index');
});

// Ruta para crear nuevos contactos
router.get('/add', (req, res) => {
  res.render('contacts/add');
});

// Ruta para guardar la información de nuevos contactos
router.post('/add', (req, res) => {
  const newContacts = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };

  const sql = "INSERT INTO contact SET ?";
  db.query(sql, newContacts, (error, results) => {
    if(error) throw error;

    res.redirect('/contact');
  });

});

// Ruta para ver la lista de todos los contactos creados
router.get('/contact', (req, res) => {
  const sql = "SELECT * FROM contact ORDER BY id desc";

  db.query(sql, (error, results) => {
    if(error) throw error;

    res.render('contacts/contact', {
      results: results
    });

  });

});

// Ruta para eliminar un contacto
router.get('/delete/:id', (req, res) => {
  const id = req.params.id;

 const sql = `DELETE FROM contact WHERE id = ${id}`;
 db.query(sql, (error, result) => {
  if(error) throw error;

  res.redirect('/contact');
 });

});

module.exports = router;