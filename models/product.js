const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    imageUrl : {
        type: String,
        required: true,
    },
    featured : Boolean,
    company : {
        type: String,
        required: true
    },
    colors : {
        type: [String],
        required : true
    }

})
// const Product = mongoose.model('Product', productSchema)


module.exports = mongoose.model('Product', productSchema)
