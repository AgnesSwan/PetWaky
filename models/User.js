import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema ({
    userName: {
        type:String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    }
},
{
    timestamps:true,
});

const User = mongoose.model("UserData", UserSchema);

export default User;

