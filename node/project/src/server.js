const port = 3003

const express = require('express')
const app = express()

const dataBase = require('./dataBase')

// app.get('/products', (req, res, next) =>{
//     console.log('Middleware 1...')
//     next() //call next get 
// })

app.get('/products', (req, res, next) =>{
    res.send(dataBase.getProducts())
})

//to get the id from the url, you can use req.params.id
///if is /:id/:name req.params.id or req.params.name
app.get('/products/:id', (req, res, next) =>{
    res.send(dataBase.getProduct(req.params.id))
})

app.post('/products', (req, res, next) =>{
    const product = dataBase.saveProduct(({
        name: req.body.name,
        price: req.body.price
    }))
    res.send(product) //generate JSON
})



app.listen(port, () =>{
    console.log(`Server is executing at port ${port}`)
})
