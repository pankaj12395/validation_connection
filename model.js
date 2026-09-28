const {default:mongoose}=require("mongoose")
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:[true, "name is require"]

    },

  email:{
    type:String,
  require:[true ,"email is require"],
  unique:true
},
  password:{
    type:String,
    require:[true , "password is require"],
    minLength:[6 , "passord is require"]

},

address:{
    type:String,
    require:[true, "address is reueire"],

},
mobile:{
    type:String,
    require:[true , "mob_number is require"],
    minLength:10,
    maxLength:10


}
})
const UserModel=mongoose.model("users",userSchema)
module.exports=UserModel