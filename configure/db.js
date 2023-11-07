const{MongoClient}=require("mongodb")

const url ="mongodb://127.0.0.1:27017"

const mongoserver=new MongoClient(url)

const connection= async ()=>{
    try{
        await mongoserver.connect()
    console.log("connection succesful")
    }
    catch(err){
        console.log(err)
    }
}

const database=mongoserver.db("humanresource")

module.exports={connection,database}