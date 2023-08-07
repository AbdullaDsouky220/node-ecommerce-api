const { default: mongoose } = require("mongoose");

//schema
const CategorySchema = new mongoose.Schema({
    name: String,
  });
  const CategoryModel = mongoose.model("Cateogry", CategorySchema);

  module.exports=CategoryModel