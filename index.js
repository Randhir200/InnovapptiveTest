const dbConnect = require('./config');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/test', async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

const port = 2000;

app.listen(port, () => {
  console.log(`our app is listeing on the port ${port}...`);
});
