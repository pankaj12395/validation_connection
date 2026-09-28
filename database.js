const {default:mongoose}=require("mongoose")

let data="mongodb://0.0.0.0/user-reg"
const connectDB= async()=>{
    try{
        await mongoose.connect(data)
        console.log("mongodb is connected")
    }
    catch(error){
        console.log("error in frontend",error)
    }
}
module.exports=connectDB