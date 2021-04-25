import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import adRouter from './routers/adRouter.js';

const app=express();
mongoose.connect(
    'mongodb+srv://ness:haslo123@syrenka.6l7qa.mongodb.net/ads?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }
  );




app.use('/users',userRouter);
app.use('/adsList',adRouter);


app.get('/',(req,res)=>{
    res.send('server ready'); //w przegladarce
});

app.use((err,req,res,next)=>{
    res.status(500).send({message: err.message});
});

const port =process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("elo"); //w terminal
});