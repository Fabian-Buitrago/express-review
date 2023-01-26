const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  // Validate data
  // Query a database
  // Process data

  res.json({
    name: "Fabian",
    lastname: "Buitrago",
    age: 31,
    points: [1, 2, 3],
    address: {
      city: "Bello",
      street: "Cra 54 # 54 - 10",
    },
  });
});

app.get('/image', (req, res) => {
    res.sendFile('./javascript.png', {root: __dirname})
})

app.get('/isAlive', (req, res) => {
    res.sendStatus(204)
})

// app.post('/products', (req, res) => {
//     res.send('creating products')
// })

// app.put('/products', (req, res) => {
//     res.send('updating products')
// })

// app.delete('/products', (req, res) => {
//     res.send('deleting products')
// })

// app.patch('/products', (req, res) => {
//     res.send('update a part of the product')
// })

app.listen(3000);
console.log("Server on por ${3000}");
