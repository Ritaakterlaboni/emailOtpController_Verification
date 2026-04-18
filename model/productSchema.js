const mongoose = require ('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    description:{
        type: String,
        trim: true,
        unique: true,
        required: true
    },
     category:{
        type: String
    },
     image:{
        type: String
      
    },
      price:{
        type: Number,
        required: true
    },
     size: {
        type: String,
        trim: true,
    },
    color: {
        type: String,
        trim: true,
    },
    ram: {
        type: String,
        trim: true,
    },
    storage: {
        type: String,
        trim: true,
    },

},
    {timestamps: true}  
    // product add & update ar time show kore
)
module.exports = mongoose.model('product', productSchema)