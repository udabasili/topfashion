const mongoose = require("mongoose");
mongoose.Promise = Promise;

mongoose.set("debug", true);
if (process.env.NODE_ENV === 'production') {
    mongoose.connect(process.env.MONGOLAB_PURPLE_URI, { 
    useFindAndModify: true, useNewUrlParser: true , useUnifiedTopology: true})
}
else{
    mongoose.connect("mongodb://localhost/top-shop", { 
    useFindAndModify: true, useNewUrlParser: true , useUnifiedTopology: true})
}

const db = mongoose.connection;
module.exports = db;