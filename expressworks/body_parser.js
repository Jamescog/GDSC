const express = require('express')
const body_parser = require('body-parser')
const PORT = process.argv[2]

app = express()
const parser = body_parser.urlencoded({extended: false})
app.post('/form', parser, (req, res) => {
    const reversed = req.body.str.split('').reverse().join('')
    res.end(reversed)
})
app.listen(PORT)