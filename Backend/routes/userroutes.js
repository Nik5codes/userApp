var express = require('express')
const route = express.Router();
var  user=require('../controller/user');

route.get("/",user.fetchUser)
route.get("/user/id:",user.fetchById)
route.post("/saveuser",user.createUser)
route.put("/updateuser/id:",user.updateById)
route.delete("/deleteuser/id:",user.deleteById)

module.exports = route;