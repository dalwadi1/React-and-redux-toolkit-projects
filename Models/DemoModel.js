import mongoose from "mongoose";

export default post = mongoose.model('post', mongoose.Schema({
    post: {
        type: String,
    },
    
}))