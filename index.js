const dotenv=require('dotenv')
dotenv.config();
const express = require("express");
require("./model/config")
const mainRoutes = require('./routes/mainRoutes')
const app = express();
const bodyparser=require("body-parser")
app.use(bodyparser.json())


app.use('/', mainRoutes)

app.listen(6000, (req, res) => {
  console.log(`server run in port no : ${process.env.PORT}`);
});
