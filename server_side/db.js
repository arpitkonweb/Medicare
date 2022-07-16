    const mysql = require('mysql2')

    function connect1()
    {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Arpit@9382',
            database: 'medicare',
            port: 3306
        })

        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
        return connection   
    }

    module.exports = {
        connect1: connect1
    }

// var mysql = require('mysql2');

//    function connect1()
//     {
// var con = mysql.createConnection({
//     host: 'localhost',
//      user: 'root',
//              password: 'Arpit@9382',
//             database: 'medicare',
//              port: 3306
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// return connection
// }
//  module.exports = {
//         connect1: connect1
//     }