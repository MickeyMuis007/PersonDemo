import dotenv from "dotenv";
import express from "express";
import * as database from './util/database';
import bodyParser from 'body-parser';

// intialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  res.send("Hello world!");
});

database.mongoConnect((client: any) => {
  app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`);
  });
})
