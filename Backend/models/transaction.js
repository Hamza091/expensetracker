var mongoose=require('mongoose');
var transactionSchema=new mongoose.Schema({
   "text":{
        type:String,
        required:true
    },
    "amount":{
        type:Number,
        required:true
    },
    "uniqueId":{
        type:Number,
        required:true
    }

})
exports.module=mongoose.model('transactions',transactionSchema)