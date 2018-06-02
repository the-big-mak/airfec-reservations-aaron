const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

// Ensure you check for the current date and do not query for available dates after today.

// Ensure you account for dates that can still be checked in despite being checked out the same day in the morning. And vice versa for days that can be checked out in the morning despite having someone check in that night.

 module.exports = {

 };