import mongoose from 'mongoose';

const adSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,

        title: {
            type:String,
            required:true,
        },
    
        category: {
            type:String,
            required:true,
        },
        description: {
            type:String,
            required:true,
        },
        price: {
            type:Number,
            required:true,
        }
    }
);

const Ad = mongoose.model("AdData", adSchema);
export default Ad;