const categorySchema = require('../model/categorySchema')

function categoryController (req, res){
const{name, description} = req.body;
try{
const createCategolry = new categorySchema({
    name,
    description,
})
createCategolry.save()
res.status(200).json({
    message:"category Add sucessfully!"
})
}
catch{
    return res.json({
        message:"error"
    })
}
}

async function getAllCategory(req, res){
    const getCategoryList = await categorySchema
    .find({})
    .populate("subcategorylist");
    res.json({message: 'paisi category', data: "getCategoryList"});
}

module.exports = {categoryController, getAllCategory}