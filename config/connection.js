
const monggoes = require('mongoose')

const connect = async()=>{
await monggoes.connect('mongodb://localhost:27017/',{})
console.log('connected to database')
}

module.exports =connect