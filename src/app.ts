import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import PersonRouter from "./routes/person.router";
import * as database from "./util/database";

// intialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use(PersonRouter);

database.mongoConnect((client: any) => {
  app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`);
  });
});
