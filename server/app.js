const express = require('express');
const mongoose = require('mongoose');
const Activity = require('./models/activity');

const app = express();
const port = 3000;

mongoose.set('strictQuery', false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/to-travel-do');
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/activities', async (req, res) => {
  const activities = await Activity.find({});
  res.send(activities);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
