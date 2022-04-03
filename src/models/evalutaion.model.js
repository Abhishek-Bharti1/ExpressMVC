const mongoose=require("mongoose");

const EvaluationSchema=new mongoose.Schema({
    date_of_evaluation:{type:String,required:true},
    instructor:{type:String,required:true},
    
},{
    versionKey:false,
    timestamps:true,
});

const Evaluation=mongoose.model("evaluation",EvaluationSchema);
module.exports=Evaluation;