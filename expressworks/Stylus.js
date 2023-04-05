const express =  require('express')
const PORT = process.argv[2]
const path = process.argv[3]

app = express()
app.use(require('stylus').middleware(path))
app.listen(PORT)