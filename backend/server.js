const express = require('express');
const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'id17748304_adimin',
  password: '-3ABMW/tL4Jn@WT5',
  database: 'id17748304_agenda'
});


/* $DB_ADDRESS="localhost";
$DB_USER="id17748304_admin";
$DB_PASS="G5mslUR)gUQbCDIA";
$DB_NAME="id17748304_buscapp";

$DB_ADDRESS="localhost";
$DB_USER="id17748304_adimin";
$DB_PASS="-3ABMW/tL4Jn@WT5";
$DB_NAME="id17748304_agenda";


*/

// Conectar ao banco de dados
connection.connect();

// Criação do servidor Express
const app = express();

// Definição das rotas da API
app.get('/api/dados', (req, res) => {
  // Consulta os dados no banco de dados
  connection.query('SELECT * FROM usuarios', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Inicia o servidor na porta desejada
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
