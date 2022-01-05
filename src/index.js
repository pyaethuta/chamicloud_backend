// import 
const express  = require('express');
const app      = express();
const env      = require('dotenv');
const mongoose = require('mongoose');
const cors     = require('cors');

// route
const AuthRouteUser = require('./routes/AuthRouteUser');

// env
env.config();

// mongodb connect
const dbUrl = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@chamicluster.fsfg7.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(dbUrl, { 
    useNewUrlParser:true, 
    useUnifiedTopology:true 
}) 
.then(() =>{
    console.log("ChamiCloud Database Connected");
})
.catch((err) =>{
    console.log("ChamiCloud Database Connection Error", err);
})
    
// middleware 
app.use(express.json());
app.use(cors());

app.use('/api', AuthRouteUser);

// listen
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

