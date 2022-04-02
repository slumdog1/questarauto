const express = require('express')
const handleCall = require('./BL/app')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    await handleCall.handleCall()
    res.send("Call was completed!")
})
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})