const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  `mongodb+srv://theBlade:${ process.env.MONGOPW }@cluster0-i0cbj.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 1337; // Get ready for deployment.
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Makes POST requests work
app.use(bodyParser.json());

routes(app);

app.listen(PORT);

// 404
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Serving on http://localhost:${ PORT }`);
