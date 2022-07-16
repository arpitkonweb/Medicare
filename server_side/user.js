const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')

const router = express.Router()
     
router.get('/', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from Users`
    connection.query(statement, (error, data) => {
        connection.end()
      
        response.send(utils.createResult(error, data))  //data->users
    })
})


     
router.get('/edit_user/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = `select * from Users where id='${id}'`
    connection.query(statement, (error, data) => {
     
        
        response.send(utils.createResult(error, data))  
        
    })
})

// exist == 1 => user
// exist == 2 => mr
// exist == 0 -> user is blocked 
router.post('/', (request, response) => {
    const {username,firstname,lastname,joindate,phoneno,email,password} = request.body
    const connection = db.connect1()
    const statement = `
    insert into Users (username, firstname, lastname,joindate, phoneno, email, password, exist) values('${username}', '${firstname}', '${lastname}','${joindate}', '${phoneno}', '${email}', '${password}',1 )`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.delete('/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = `delete from Users where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.put('/edit_user/:id',(request,response)=>{
    const {id} = request.params
    const {username,firstname,lastname,joindate,phoneno,email,password,exist} = request.body
    const connection = db.connect1()

    const statement = `update Users set username='${username}',firstname='${firstname}',lastname='${lastname}',joindate='${joindate}',phoneno='${phoneno}',email='${email}',password='${password}', exist=${exist} where id =${id}`
    
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router