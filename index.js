
const express= require("express");

const { connection } = require("./configure/db");
const { route } = require("./router/router");
const { employeeData, employeeData1, employeeData2, employeeData3, employeeData4, employeeData5 } = require("./controller/productcontroller");


const app = express()
app.use("/api",route)
app.get("/employeeData",employeeData)
app.get("/employeeData1",employeeData1)
app.get("/employeeData2",employeeData2)
app.get("/employeeData3",employeeData3)
app.put("/employeeData4",employeeData4)
app.patch("/employeeData5",employeeData5)





app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.listen(5000 , async ()=>{
 try{
    await connection()
    console.log("Server is started after the connection");
 }
 catch(err){
    console.log(err);
 }
})