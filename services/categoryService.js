const CategoryModel=require('../models/categriesModel')

exports.getCategory=(req, res) => {
    res.json("hello ");
  }
exports.postCategory= (req, res) => {
    const name = req.body.name;
    const newCateogry = new CategoryModel({ name });
    newCateogry.save()
      .then((doc) => {
        console.log(
          `the cateogry has been created successfull ,congrates 🎊🎉🎉🎉`
        );
        res.json(doc);
      })
      .catch((error) => {
        console.log(error, "infortunately there is an error dude 😢😢");
        res.send(error)
      });
  }