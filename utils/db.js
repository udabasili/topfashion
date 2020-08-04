const mongoose = require("mongoose");
const { mongoDbDevelopment, mongoDbProduction } = require("../config");
mongoose.Promise = Promise;

mongoose.set("debug", true);
if (process.env.NODE_ENV === 'production') {
    mongoose.connect(mongoDbProduction, { 
    useFindAndModify: true, useNewUrlParser: true , useUnifiedTopology: true})
}
else{
    mongoose.connect(mongoDbDevelopment, { 
    useFindAndModify: true, useNewUrlParser: true , useUnifiedTopology: true})
}

const db = mongoose.connection;
module.exports = db;