import mongoose from "mongoose";

const post = mongoose.model('product', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}))

export default post   