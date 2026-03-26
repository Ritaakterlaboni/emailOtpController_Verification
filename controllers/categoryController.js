const categorySchema = require('../model/categorySchema')

async function categoryController(req, res) {
  const { name, description } = req.body;
  try {
    const createCategory = new categorySchema({
      name,
      description,
    });
    await createCategory.save();

    return res.json({ message: "Category Added Successfully" });
  } catch (error) {
    return res.json({ message: "error", error: error.message});
  }
}

async function getAllCategory(req, res){
    const getCategoryList = await categorySchema
    .find({})
    .populate("subCategoryList");
    res.json({message: 'paisi category', data: getCategoryList});
}

async function updateCategoryController(req, res){
const { id } = req.params;
//url ar modde thaka dynamic data nite use kori req.params == ja diye amra specific identity bujhi
// console.log(id);   
const {name, description} = req.body;
const updateCategory = await categorySchema.findById(id)
updateCategory.name = name;
updateCategory.description = description;
// console.log(updateCategory)

await updateCategory.save();
res.json({message:"update hoise", data:updateCategory})

}

async function deleteCategoryController(req, res){
const {id} = req.params;
const deleteCategory = await categorySchema.findByIdAndDelete(id)
res.json({message:"delete product", data:deleteCategory})
}

module.exports = {categoryController, getAllCategory, updateCategoryController,deleteCategoryController}


