const mongoose=require('mongoose')

let Book=mongoose.model('Book',{bname:String,price:Number,count:Number})

module.exports=Book