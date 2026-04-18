const uploadImage = require("../middlewares/cloudinary");
const productSchema = require("../model/productSchema");

async function productController(req, res) {
    const { name, description, category, price, size, color, ram, storage } =
        req.body;


    // const imagePath = req.file.buffer
    const imagePath = req.file.path

    console.log(imagePath)

    const imageUrl = await uploadImage(imagePath)

    const createProduct = new productSchema({
        name,
        description,
        category,
        image: imageUrl.secure_url,
        // image: `http://localhost:3000/uploads/${req.file.filename}`,
        price,
        size,
        color,
        ram,
        storage,
    });
    await createProduct.save();
    res.json({
        message: "Product Added Successfully",
        data: createProduct,
    });
}

async function getProductController(req, res) {
    const getProduct = await productSchema.find({});
    res.json({
        message: "Success",
        data: getProduct,
    });
}

async function updateProductController(req, res) {
    const { id } = req.params;
    const { name, description, category, price, size, color, ram, storage } =
        req.body;
    const updateProduct = await productSchema.findById(id);
    updateProduct.name = name;
    updateProduct.description = description;
    updateProduct.category = category;
    updateProduct.price = price;
    updateProduct.size = size;
    updateProduct.color = color;
    updateProduct.ram = ram;
    updateProduct.storage = storage;

    await updateProduct.save();

    res.json({
        message: "Success",
        data: updateProduct,
    });
}

async function deleteProduct(req, res) {
    const { id } = req.params;
    const deleteProduct = await productSchema.findByIdAndDelete(id);

    res.json({
        message: "Successfully deleted",
        data: deleteProduct,
    });
}

async function deleteAllProduct(req, res) {
    const deleteAllProduct = await productSchema.deleteMany({});
    res.json({
        message: "Successfully deleted",
        data: deleteAllProduct,
    });
}

module.exports = {
    productController,
    updateProductController,
    getProductController,
    deleteProduct,
    deleteAllProduct,
};
