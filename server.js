const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

//config
dotenv.config({
  path: "config.env",
});

//midllwares
app.use(morgan("dev"));
app.use(express.json());
//mongoose
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log(
      `the app has been connected to db successfully ${process.env.PORT}`
    );
  })
  .catch((error) => {
    console.error(`there is an error in the app ${error}`);
  });

//schema
const CateogrySchema = new mongoose.Schema({
  name: String,
});
const CateogryModel = mongoose.model("Cateogry", CateogrySchema);

//routes
//get /
app.get("/", (req, res) => {
  res.json("hello ");
});
//post /createCateogry

app.post("/", (req, res) => {
  const name = req.body.name;
  const newCateogry = new CateogryModel({ name });
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
});

app.listen(process.env.PORT, () => {
  console.log("the app is running on port " + process.env.PORT);
});
