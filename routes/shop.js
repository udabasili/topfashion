const express=  require("express");
const router = express.Router()
const shopController = require("../controllers/shop")

router.get("/cart", shopController.getUserCartItems)
router.post("/cart/add", shopController.postCart)
router.delete("/cart/:itemId/delete",shopController.removeItemFromCart)
router.delete("/cart/:itemId/clear", shopController.clearItemFromCart)
module.exports=router