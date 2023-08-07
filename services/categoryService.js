const { default: slugify } = require("slugify");
const CategoryModel = require("../models/categriesModel");
const expressAsyncHandler = require("express-async-handler");

exports.getCategory = (req, res) => {
  res.json("hello ");
};
exports.createCategory = expressAsyncHandler(async(req, res) => {
  const name = req.body.name;
 const newCategory= await CategoryModel.create({ name, slug: slugify(name) })
      res.status(201).json({
        data: newCategory,
      });
})
