const { default: mongoose } = require("mongoose");

//schema
const CategorySchema = new mongoose.Schema({
    name: {
      type:String,
      required:[true,'name is required'],
      unique:[true,'name must be unique'],
      minLength:[3,'too short name '],
      maxLength:[32,'too long name']
    },
    slug:{
      type:String,
      lowercase:true,
    },
    image:String
  },{
    timestamps:true
  });
  const CategoryModel = mongoose.model("Cateogry", CategorySchema);

  module.exports=CategoryModel