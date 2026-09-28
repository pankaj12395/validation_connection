const exprees= require("express")
const {default:mongoose}=require("mongoose")
const connectDB=require("./database")
const UserModel=require("./model")
const app=exprees()
app.use(exprees.json())
connectDB()

app.post("/create",async (req,res)=>{
    try{
        let {fullName,email,password,address,mobile}=req.body
if (!fullName || !email ||  !password ){
    return res.status(400).json({
        success:false,
        message:"all field are require"
        
    }) }
    const newUser= await UserModel.create({
        fullName,
        password,
        email,
        address,
        mobile
    })
        return res.status(201).json({
            success:true,
            message:"regitration succefull",
            data:newUser
        })
    }



catch(error){
    console.log ("error catchby me", error)
    return res.status(500).json({
        success:false,
        message:"internal error"
    })
}
})
app.listen(3000,()=>{
    console.log('server is running on port3000')
})