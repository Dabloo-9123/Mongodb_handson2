const { addProducttoStore, updatePriceOfSingleProduct, employeeData } = require("../controller/productcontroller");

const route=require("express").Router();

route.post('/updateProduct',addProducttoStore);
route.put('/updatePrice',updatePriceOfSingleProduct)
route.get("/employeeData",employeeData)
// route.get("/employeeData")
module.exports={route}