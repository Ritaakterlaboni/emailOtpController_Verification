const mongoose = require ('mongoose')
const {Schema} = mongoose

const controller = new Schema({
    firstname:{
        type:String,
        required: true,
    },
    lastname:{
        type:String,
        required: true,
    },
    fullname:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    otp:{
        type:String,
    },
    expireOtp:{
        type:Date,
    },
    isVerified:{
        type: Boolean,
        default: false,
    },

},
{ timestamps: true }
)


module.exports = mongoose.model("controller", controller)