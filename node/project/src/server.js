const port = 3003

const express = require('express')
const app = express()

// app.get('/products', (req, res, next) =>{
//     console.log('Middleware 1...')
//     next() //call next get 
// })

app.get('/products', (req, res, next) =>{
    res.send({name: 'Laptop', price: 123.75})//it is converted automaticaly to JSON 
})

// it works with ANY URL
app.use((req, res, next) =>{
    res.send({name: 'Laptop', price: 123.75})//it is converted automaticaly to JSON 
})

app.listen(port, () =>{
    console.log(`Server is executing at port ${port}`)
})
