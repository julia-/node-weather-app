const express = require('express')

const server = express()

server.listen(7000, (error) => {
  console.log('Server started at http://localhost:7000');
})