const { default: slugify } = require("slugify");
const CategoryModel = require("../models/categriesModel");
const expressAsyncHandler = require("express-async-handler");
//@route GET /api/v1/category
//@desc for getting all the list of categries created
//@access public
exports.getCategory = expressAsyncHandler(
  async(req, res) => {
    const allCategories=await CategoryModel.find({}
      )
    res.status(200).json({
      results:allCategories.length,
      data:allCategories
    });
  }
)


//@route POST /api/v1/category
//@desc this route is for creating a category 
//@access private
exports.createCategory = expressAsyncHandler(async(req, res) => {
  const name = req.body.name;
 const newCategory= await CategoryModel.create({ name, slug: slugify(name) })
      res.status(201).json({
        data: newCategory,
      });
})
