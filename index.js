import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT ? process.env.PORT : 5000

app.get('/', (req, res) => {
  res.send('Learn docker basics')
})

app.listen(port, () => {
  console.log(`Node Express app listening on port ${port}`)
})
