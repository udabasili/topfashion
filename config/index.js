const dotenv = require("dotenv");
const envFound = dotenv.config();

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (!envFound) {

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
    port: process.env.PORT || 6000,
    secretKey: process.env.SECRET_KEY,
    mongoDbProduction: process.env.MONGOLAB_PURPLE_URI,
    mongoDbDevelopment: process.env.MONGODB_URI_DEVELOPMENT
}