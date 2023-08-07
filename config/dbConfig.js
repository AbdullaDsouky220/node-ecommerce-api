const mongoose = require("mongoose");

const dbConnection=()=>{
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
}

module.exports=dbConnection