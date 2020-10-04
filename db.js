var mysql = require('mysql');
const config = require("./config.json");

var connection = mysql.createConnection({
  host: config.host,
  user: config.username,
  password: config.password
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.connection = connection;