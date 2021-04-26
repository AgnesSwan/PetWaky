import express from 'express';
import Ad from '../models/Ad.js';
import mongoose from 'mongoose';
import expressAsyncHandler from 'express-async-handler';

const adRouter = express.Router();

//seed automa wrzuca
//adRouter.get('/seed', 
   // expressAsyncHandler(async (req,res) => {
   //// const createdAds= await Ad.insertMany(data.ads);
  //  res.send({createdAds});

//}));

//wziecie listy ogloszen, empty object powoduje zwrocenie wszystkich ogloszen
adRouter.get('/', 
    expressAsyncHandler(async (req,res) => {
    const ads= await Ad.find({});
    res.send(ads);
}));

//dodawania

adRouter.post('/add', (req, res, next) => {
  const add = new Ad({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,

  });
  add
    .save()
    .then((doc) => {
      res.status(200).json({
        wiadomość: 'Dodano nowy produkt',
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
});




//singleAd
adRouter.get('/:id', 
    expressAsyncHandler(async (req,res) => {
    const ad= await Ad.findById(req.params.id);
    if (ad) {
        res.send(ad);
    }
    else {
        res.status(404).send({message: "Product not found"});
    }
}));


export default adRouter;