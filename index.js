const express = require('express');
const mongoose = require('mongoose');
const app = express();
const UserModel=require('./models/User')

app.use(express.json());

mongoose.connect('mongodb+srv://ness:97zefir79@syrenka.6l7qa.mongodb.net/shop?retryWrites=true&w=majority',{
    useNewUrlParser:true,
});

app.get('/', (req, res)=> {
//insert data to database
const user = new UserModel({userName: "Agnieszka", email: "aga@wp.pl", password: "97zefir79"});
try {
await user.save();
}
catch(err){
    console.log(err);
}
});


app.listen(3001,()=>{
    console.log("SErver on 3001 port");
});