const categorySchema = require("../model/categorySchema");
const subCategorySchema = require("../model/subCategorySchema");

async function subCategoryController(req, res) {
  const { name, description, categoryId } = req.body;
  try {
    const existingSubCategory = await subCategorySchema.findOne({name})

    if(existingSubCategory){
      return res.json({message: "Already Exist"})
    }
    //jodi existingsubcategory hoi tahole ai msg dibe na hole niche abar notun sybcategory create hobe
    const createSubCategory = new subCategorySchema({
      name,
      description,
      categoryId,
    });
    await createSubCategory.save();

    const updatedCategory = await categorySchema.findOneAndUpdate(
        {_id: categoryId},
        { $push: {subCategoryList: createSubCategory._id}}, 
        {new: true}
        )

    res.status(200).json({ message: "Subcategory Added Successfully" });
  } catch (error) {
    return res.json({ message: "error" });
  }
}

module.exports = subCategoryController


//check korbo age existing subcategory ase ki na na thakle notun create korbo