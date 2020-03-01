const User = require("../model/user");
const generateToken = require("../utils/token");

exports.register = async (req, res, next) =>{
    try {
        let user = await User.create(req.body);
        await user.encryptPassword();
        await user.save();
        let email = req.body.email;
        user = await User.findOne({
            email: email
        })
        user = user.filterUserData()
        let token = generateToken(user)
            return res.status(200).json({
                status: 200,
                message:{
                    token: token,
                    user
                }
            })

    } catch (error) {        
        console.log(error);
        
        if (error.code ===11000) {
          error.message = "Sorry, this email/username is taken" ;
        }
        return next({
            status:500,
            message:error.message
        })
    }
    

}

exports.loginIn = async function(req, res, next){
    try {
        let email = req.body.email;
        let user = await User.findOne({
            email: email
        })
        if(!user){
            return next({
                status:404,
                message: "Email doesn't exist. Please Register"
            })
        }

        let confirmPassword = await user.comparePassword(req.body.password) 
        if(confirmPassword){
            let token = generateToken(user)
            user = user.filterUserData()            
                return res.status(200).json({
                    status: 200,
                    message:{
                        token: token,
                        user
                    }
                })
        }
        else{
            return next({
                status:"404",
                message: "Email/password combination doesn't matter"

            })
        }
    } catch (error) {
        console.log(error);
        
        return next({
            status:"404",
            message: "Email/password combination doesn't matter"

        })
    }
    

}