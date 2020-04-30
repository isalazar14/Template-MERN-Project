const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const dbName = "db"

// app.use(express.static(__dirname + '/public/dist/public')); /* Angular client route */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

routes(app);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})