
const User = require("../model/user");



exports.postCart = async function (req, res, next){
    try {

        const cartItem =  req.body;        
        let user =  req.user;        
        await user.addToCart(cartItem)
        user = await User.findOne({username:user.username})
        let cartItems = user.cartItems;
        return res.status(200).json({
            status:200,
            message: cartItems
        })
        
    } catch (error) {
        console.log(error);
        
        return next({
            status:500,
            message:error
        })
    }
}

exports.getUserCartItems = function(req, res, next){
    try {
        let user = req.user;
        let cartItems = user.cartItems;
        return res.status(200).json({
            status:200,
            message:cartItems
        })
    } catch (error) {
        
    }
    
}

exports.removeItemFromCart = async function(req, res, next){
    try {
        const cartItemId = req.params.itemId;   
        let user = req.user;        
        await user.removeQuantityFromCart(Number(cartItemId))
        user = await User.findOne({username:user.username})
        let cartItems = user.cartItems;
        return res.status(200).json({
            status:200,
            message: cartItems
        })
    } catch (error) {
        console.log(error);
        
        return next({
            status:500,
            message:error
        })
        
    }
}

exports.clearItemFromCart = async function(req, res, next){
    try {
        let cartItemId = req.params.itemId;   
        let user = req.user;        
        await user.clearItemFromCart(Number(cartItemId))
        user = await User.findOne({username:user.username})
        let cartItems = user.cartItems;
        return res.status(200).json({
            status:200,
            message: cartItems
        })
      
    } catch (error) {
        console.log(error);
        
        return next({
            status:500,
            message:error
        })

    }
}