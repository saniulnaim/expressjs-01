const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!' + Date()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 
// to run this code :

// powershell command : nodemon .\index.js
// go to any browser
// then write : http://localhost:3000/
 
 
