const express = require('express')
const app = express()

app.use(express.json())

const usersRouter = require('./controllers/users')

app.use('/api/users', usersRouter)

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

//Middleware that catches requests made to non-exisiting routes
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})