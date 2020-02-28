const jwt = require("jsonwebtoken");


const generateToken  = user => {
    let u = ({
        username: user.username,
        _id: user._id.toString(),
    })

    return token = jwt.sign(u, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24 
     });
   
}

module.exports = generateToken;