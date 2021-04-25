import mongoose from 'mongoose';

const adSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
        },
        image: {
            type: String,
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
        }, 
        city: {
            type:String,
            required:true,
        },
        petType: {
            type:String,
            required:true,
        },
        size: {
            type:String,
            required:true,
        }
    },
    {
        timestamps: true,
    }
);

const Ad = mongoose.model("AdData", adSchema);
export default Ad;