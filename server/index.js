import express from 'express' //framework for creating routing
import bodyParser from 'body-parser' //enable post request
import mongoose from 'mongoose' //create models for our post
import cors from 'cors' //enable cross origin request
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'
dotenv.config()

const app = express() //initialize app


app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', postRoutes)

app.get('/',(req, res) => {
    res.send('This is Highlights API-made by Ryota Suzuki')
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
