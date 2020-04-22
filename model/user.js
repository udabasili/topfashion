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
    cartItems :{
        type: Array
    }
    },
    {
        timestamps:true
    }
)

userSchema.methods.encryptPassword = async function (req, res, next){
    try {
        let hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed
    } catch (error) {
        return next(error)
    }
}

userSchema.methods.comparePassword = async function (password, next){
    try {
        let comparePassword = await bcrypt.compare(password, this.password)
        return comparePassword

    } catch (error) {
        return next(error)
    }
}

userSchema.methods.addToCart = async function(addedItem){
    try {
        let updatedCartItems =[...this.cartItems];
        let existedItem = updatedCartItems.find(product =>{
            return product.id === addedItem.id;
        })    
        if(existedItem){
            updatedCartItems =  updatedCartItems.map((item) => ((addedItem.id === item.id)? 
                ({ ...item, quantity: item.quantity + 1 }): 
                item))    
            this.cartItems =  updatedCartItems;
            
            
        }
        else{
            this.cartItems = [...updatedCartItems, {...addedItem, quantity:1}]

        }
        return this.save()
            
    } catch (error) {        
    }
    
}

userSchema.methods.removeQuantityFromCart = function(itemId){
    let updatedCartItems =  [...this.cartItems]  
    const existingCartItem = updatedCartItems.find(
        (cartItem) => cartItem.id === itemId,
      );
    
      if (existingCartItem.quantity === 1) {
        this.cartItems =  updatedCartItems.filter((cartItem) => cartItem.id !== itemId);
        return this.save()
      }
      this.cartItems =  updatedCartItems.map((item) => (
        (itemId === item.id)
          ? ({ ...item, quantity: item.quantity - 1 })
          : item
      ));
    return this.save();
}

userSchema.methods.clearItemFromCart = function(itemId){
    let updatedCartItems = [...this.cartItems]
    let existedItem =  updatedCartItems.find(product =>{
        return product.id === itemId
    })    
    if(existedItem){
        this.cartItems =  updatedCartItems.filter((cartItem)=>cartItem.id !== itemId)
        return this.save();
    }
}


userSchema.methods.filterUserData = function() {
    let obj = this.toObject();
    delete obj.password;
    delete obj.email;
    return obj;
}

const User = mongoose.model("User", userSchema);
module.exports = User;