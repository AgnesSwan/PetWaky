import express from 'express';
import Ad from '../models/Ad.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';

const adRouter = express.Router();

//seed automa wrzuca
adRouter.get('/seed', 
    expressAsyncHandler(async (req,res) => {
    const createdAds= await Ad.insertMany(data.ads);
    res.send({createdAds});

}));

//wziecie listy ogloszen, empty object powoduje zwrocenie wszystkich ogloszen
adRouter.get('/', 
    expressAsyncHandler(async (req,res) => {
    const ads= await Ad.find({});
    res.send(ads);
}));
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