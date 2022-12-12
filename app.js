const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.json({
        msg: 'Hi from Backend'
    })
})

app.listen(3000)