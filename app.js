const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;
const personRouter = require('./routes/person.router');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(personRouter);

app.use((req, res, next) => {
  res.send('Page not found!');
})

mongoConnect(client => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
})

