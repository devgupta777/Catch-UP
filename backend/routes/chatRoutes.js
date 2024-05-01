const express=require("express");
const protect = require("../middleware/authMiddleware");
const {accessChat,fetchChat,createGroupChat,renameGroup,addIntoGroup,removeFromGroup,updateNotification}=require("../controller/chatController");
const router=express.Router();
 router.route('/').post(protect,accessChat);
router.route('/').get(protect,fetchChat);
 router.route('/group').post(protect,createGroupChat);
 router.route('/rename').put(protect,renameGroup);
router.route('/remove').put(protect,removeFromGroup);
router.route('/add').put(protect,addIntoGroup);
router.route('/update').put(protect,updateNotification);
module.exports=router;