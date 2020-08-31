const express = require("express")
const app = express() 
const path = require("path")
app.use(express.static(path.join(__dirname, '/src')))
app.get("/" , (req, res) =>{

})


app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))