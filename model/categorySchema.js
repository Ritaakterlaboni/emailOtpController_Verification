const mongoose = require('mongoose')
const{Schema} = mongoose

const categorySchema = new Schema({
    name:{
        type: String,
        trim: true,
        required:true,
        unique:true
    },
    description:{
        type: String,
        trim: true
    },
    subCategoryList:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory"

    }]
})

module.exports = mongoose.model ("category", categorySchema)


// ref === mongoose.model ("subcategory", categorySchema) same same hote hobe