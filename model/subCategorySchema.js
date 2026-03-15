const mongoose = require('mongoose')
const {Schema} = mongoose

const subCategorySchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        unique: true,
        requierd: true
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
})

module.exports = mongoose.model("subcategory", subCategorySchema)