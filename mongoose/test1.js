const mongoose=require('mongoose')

mongoose.model('Phone',{name:String,price:Number,count:Number})

let Phone=mongoose.model('Phone')

function addPhone(){
    Phone.create({name:'Galax',price:34.5,count:3})
        .then(function (newPhone) {
            console.log(newPhone)
            mongoose.disconnect()
        })
}

function addPhones(){
    Phone.insertMany([{name:'Galax1',price:34.5,count:3},{name:'iphone',price:134.5,count:3}])
        .then(function (newPhone) {
            console.log(newPhone)
            mongoose.disconnect()
        })
}

function updatePhone(){
    Phone.findByIdAndUpdate('5c9c3a2f1eb7890638b21f6e',
        {name:'iphone',price:136,count:2},
        {new:true})
        .then(ph=>{
            console.log(ph)
            mongoose.disconnect()
        })
}
function find(){
    Phone.find({})
        .then(ps=>{
            console.log(ps)
            mongoose.disconnect()
        })
}

function remove(){
    Phone.remove({_id:'5c9c3a2f1eb7890638b21f6e'})
        .then(rs=>{
            console.log(rs)
            mongoose.disconnect()
        })
}

mongoose.connect('mongodb://localhost:27017/bj',function (err) {
    if(!err) {
        find();
    }
    else console.log(err)
})