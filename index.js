const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(cors())//prevents blocking website

app.use(`/`, require('./router/mailRoute'))
app.listen(PORT, ()=>{
    console.log(`Server is started at http://localhost:${PO}`)
})
