import express from 'express';
import User from '../models/User.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import {generateToken} from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req,res)=> {
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
}));

userRouter.post('/login', 
    expressAsyncHandler(async (req,res)=> {
    const user = await User.findOne({email: req.body.email});
    if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                userName: user.userName,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;
        } 
    }
    res.status(401).send({message: "invalid data"});
        
}));

userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const createdUser = await user.save();
      res.send({
        _id: createdUser._id,
        userName: createdUser.userName,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
      });
    })
  );
  
export default userRouter;

