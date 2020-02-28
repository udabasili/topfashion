const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    },
    {
        timestamps:true
    }
)

userSchema.methods.encryptPassword = async(req, res, next) => {
    try {
        let hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed
        return true
    } catch (error) {
        return false
    }
}

userSchema.methods.comparePassword = async (password) => {
    try {
        let comparePassword = await bcrypt.compare(password, this.password)
        return comparePassword

    } catch (error) {
        return error
    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;