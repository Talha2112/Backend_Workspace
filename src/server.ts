import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

const PORT = '8080'
const MONGO_URL = "mongodb+srv://talha:talha@cluster0.h8rw0dk.mongodb.net/?retryWrites=true&w=majority"

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

mongoose.Promise = Promise
mongoose.connect(MONGO_URL).then(() => console.log("Mongo Connected")).catch((error : Error) => {
    console.log("Connection Failed")
})

import registrationRoute from './router/authentication'
app.use(registrationRoute)