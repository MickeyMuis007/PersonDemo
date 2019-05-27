import dotenv from "dotenv";
import express from "express";

// intialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`server start at http://localhost:${ port }`);
});
