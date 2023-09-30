const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

require("dotenv").config();
const apiRouter = require("./router/userRouter");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is Runing !!!");
});
