const jwt = require("jsonwebtoken");
const { secretKey } = require("../config");

const generateToken  = user => {
    let u = ({
        username: user.username,
        _id: user._id.toString(),
    })

    return token = jwt.sign(u, secretKey, {
        expiresIn: 60 * 60 * 24 
     });
   
}

module.exports = generateToken;