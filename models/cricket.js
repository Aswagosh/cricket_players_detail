const mongoose=require("mongoose")
const cricketSchema=mongoose.Schema({

    Player_Name : String,
    Age:String,
    Jersey_Number:String,
    Player_Type:String,
    Odi_Runs:String,
    T20_Runs:String,
    Test_Runs:String,
    Odi_Wickets:String,
    T20_Wickets:String,
    Test_Wickets:String

})
const cricketModel=mongoose.model("crickets",cricketSchema)
module.exports=cricketModel