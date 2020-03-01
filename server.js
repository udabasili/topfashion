const express = require("express");
const app = express();
const mongoConnect = require("./utils/db");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const userRouter = require("./routes/auth");
const shopRoutes = require("./routes/shop")
const errorHandler = require("./controllers/error")
const checkAuth = require("./middleware/confirmAuth");
const PORT = process.env.PORT || 6000 ;


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'/client/build')))


//routers
app.use("/auth", userRouter)
app.get("/authenticate-user", checkAuth.verifyUser)
// app.use(checkAuth.protectedRoute);
app.use("/user/:userId/", checkAuth.confirmUser, shopRoutes);
app.use(errorHandler)


//static file for Production stage

app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(PORT, (req, res) =>{
    mongoConnect.on('error', console.error.bind(console, 'MongoDB connection error:'));
    mongoConnect.once('open', function(data) {
    console.log("Mongoose database connected")
    console.log(`${PORT} is running`)

    })

})