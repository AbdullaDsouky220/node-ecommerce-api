const { default: slugify } = require("slugify");
const CategoryModel = require("../models/categriesModel");
const expressAsyncHandler = require("express-async-handler");
//@route GET /api/v1/category
//@desc for getting all the list of categries created
//@access public
exports.getCategories = expressAsyncHandler(async (req, res) => {
  const limit = +req.query.limit || 5;
  const page = +req.query.page || 1;
  const skip = (page - 1) * limit;

  const allCategories = await CategoryModel.find({}).skip(skip).limit(limit);
  res.status(200).json({
    results: allCategories.length,
    page,
    data: allCategories,
  });
});
//@route GET /api/v1/category:id
//@desc for getting specific category by id
//@access public
exports.getCategory=expressAsyncHandler(
  async(req,res)=>{
    const {id}=req.params
    const category=await CategoryModel.findById(id)
    if(!category){
      res.status(404).send(`${id}: this category is not found`)

    }
    res.status(200).json({
      data:category
    })
  }
)
//@route put /api/v1/category:id
//@desc for updating specific category by id
//@access private
exports.updateCategory=expressAsyncHandler(
  async(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    const category=await CategoryModel.findOneAndUpdate(
      {_id:id},
      {name,slug:slugify(name)},
      {new:true}
    )
    if(!category){
      res.status(404).send(`${id}: this category is not found`)

    }
    res.status(200).json({
      data:category
    })
  }
)

//@route POST /api/v1/category
//@desc this route is for creating a category
//@access private
exports.createCategory = expressAsyncHandler(async (req, res) => {
  const name = req.body.name;
  const newCategory = await CategoryModel.create({ name, slug: slugify(name) });
  res.status(201).json({
    data: newCategory,
  });
});
