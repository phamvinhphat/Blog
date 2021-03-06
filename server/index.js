require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const newsRouter = require('./routes/news');
const bodyParser = require('body-parser');
const cors = require('cors')

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb+srv://blog:blog1234@cluster0.0o6xc.mongodb.net/webBlog?retryWrites=true&w=majority', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log("MongoDB connected")
    } catch(error){
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express()

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());


app.use(express.json())
app.use(cors())

app.use('/api/auth',authRouter)
app.use('/api/posts',postRouter)
app.use('/api/news',newsRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT,() => console.log('Server started on port 5000'))

