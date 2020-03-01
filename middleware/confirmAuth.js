const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.verifyUser = function (req, res, next) {
    try {        
        let token = (req.headers['authorization']).split(" ")[1];
        if (!token) {
            return next({
                status:401,
                message:"unAuthorized User"
            });
        }
        jwt.verify(token, process.env.SECRET_KEY, async function(error, user){
            if(error){
                return next({
                    status:401,
                    message:"unAuthorized User"
                });
            }
             user = await User.findOne({username: user.username})
            if (user) {
                 return res.status(200).json({
                    status:200,
                        message:{
                            token: token,
                            user:{
                                _id: user._id,
                                username: user.username
                            }
                        }
                    })   
            } 
            else {
                return next({
                    status:401,
                    message:"unAuthorized User"
                })
            }
        })

            
        } catch (error) {
            
             return next({
                status:401,
                message:"unAuthorized User"
            })
        }
        
    }

// check token before giving access to account 
exports.protectedRoute = function(req, res, next){
    try{
        console.log(req.headers['authorization']);
        
        let token = (req.headers['authorization']).split(" ")[1];
        if (!token) {
            return res.status(401).json({message: 'Must pass token'});
        }
        jwt.verify(token, process.env.SECRET_KEY, async function(error, user){
            if(error){
                return next({
                    status:401,
                    message:"unAuthorized User"
                });
            }
            user = await User.findOne({username: user.username})
            if (user) {
                 return res.status(200).json({
                    status:200,
                        message:{
                            token: token,
                            user:{
                                _id: user._id,
                                username: user.username
                            }
                        }
                    })   
            } 
            else {
                return next({
                    status:401,
                    message:"unAuthorized User"
                })
            }
        })

            
        } catch (error) {
            console.log(error);
            
             return next({
                status:401,
                message:"unAuthorized User"
            })
        }
        
    }

// check if it is the right user

exports.confirmUser  = function(req, res, next){
    try {
        let token = (req.headers['authorization']).split(" ")[1];

    if (!token) {
        return res.status(401).json({message: 'Must pass token'});
    }
    jwt.verify(token, process.env.SECRET_KEY, async function(error, user){
        if(error){
            return next({
                status:401,
                message:"unAuthorized User"
            });
        }
        user = await User.findOne({username: user.username})
        if (user) {
             return res.status(200).json({
                status:200,
                    message:{
                        token: token,
                        user:{
                            _id: user._id,
                            username: user.username
                        }
                    }
                })   
        } 
        else {
            return next({
                status:401,
                message:"unAuthorized User"
            })
        }
    })

        
    } catch (error) {
        
         return next({
            status:401,
            message:"unAuthorized User"
        })
    }
    
}