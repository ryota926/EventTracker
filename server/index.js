import express from 'express' //framework for creating routing
import bodyParser from 'body-parser' //enable post request
import mongoose from 'mongoose' //create models for our post
import cors from 'cors' //enable cross origin request


const app = express() //initialize app
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://ryota:bdEJjrOFQwrYFCT0@cluster0.q6p9g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
