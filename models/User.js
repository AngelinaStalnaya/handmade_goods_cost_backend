import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {type: String, required: true},
    login: {type: String, required: true},
    password: {type: String, required: true},
    sex: {type: String},
    avatar: {type: String},
});

export default mongoose.model('User', User);