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

module.exports = {categoryController, getAllCategory}


