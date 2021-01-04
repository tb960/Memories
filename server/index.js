import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//const CONNECTION_URL = 'mongodb+srv://<username>:<password>@cluster0.zo7sd.mongodb.net/<dbname>?retryWrites=true&w=majority';
//the connection url should be a env variables which should not be disclosed
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)   //this is called a template string
    }))
    .catch((error) => {
        console.log(error.message)
    });

mongoose.set('useFindAndModify', false);
