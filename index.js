const express = require('express')

const app = express()

app.get('/products', (req, res) => {
    // Validate data
    // Query a database
    // Process data
    
    res.send('product list')
})

app.post('/products', (req, res) => {
    res.send('creating products')
})

app.put('/products', (req, res) => {
    res.send('updating products')
})

app.delete('/products', (req, res) => {
    res.send('deleting products')
})

app.patch('/products', (req, res) => {
    res.send('update a part of the product')
})

app.listen(3000)
console.log('Server on por ${3000}')