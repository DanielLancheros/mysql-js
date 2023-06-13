// import the mysql2 library
import mysql from 'mysql2'
import connectionInfo from './secretStuff.js'

// connect to our mysql database (give it our credentials)
const connection = mysql.createConnection(connectionInfo)

// run a simple query to get two movies
connection.query(
    'SELECT * FROM movies',
    function (error, results) {
        console.log(error)
// console.table the results
console.table(results)
connection.destroy()
    }
)

