const express = require('express');  //usual syntax is const express = require('express'), but in the latest version of node we can use the import keyword
const mongoose = require('mongoose');  //how does the destructuring work here?
const cors = require('cors');

const postRoutes = require('./routes/posts.js');

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: "true" }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://teoboonkhang99:Khang_990916@database.tdiv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);