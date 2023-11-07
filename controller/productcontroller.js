const { database } = require("../configure/db")

const empdata=database.collection("employee")
const addProducttoStore=(req,res)=>{
    res.send("Product added")
}

const updatePriceOfSingleProduct=(req,res)=>{
    res.send("Product Price updated")
}
const employeeData=async (req,res)=>{
   const data=await empdata.find({}).toArray();
   res.send(data)
}
const employeeData1=async (req,res)=>{
    const data=await empdata.find({"salary":{$gt:"30000"}}).toArray();
    res.send(data)
 }
 const employeeData2=async (req,res)=>{
    const data=await empdata.find({"overallExp":{$gt:"2"}}).toArray();
    res.send(data)
 }
 const employeeData3=async (req,res)=>{
    const data=await empdata.find({"overallExp":{$gt:"1"},"yearGrad":{$gt:"2015"}}).toArray();
    res.send(data)
 }
 const employeeData4=async (req,res)=>{
    const data=await employeeData.updateMany({"salary":{$gt:"70000"}},{$set:{"salary":"65000"}})
    res.send(data)
    
 }
 const employeeData5=async (req,res)=>{
    const data=await employeeData.deleteMany({"lastCompany" : "Y"})
    res.send(data)
    
 }



module.exports={addProducttoStore,updatePriceOfSingleProduct,employeeData,employeeData1,employeeData2,employeeData3,employeeData4,employeeData5}