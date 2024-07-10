import mongoose from "mongoose";

const product = mongoose.model('product', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}));

export default product;