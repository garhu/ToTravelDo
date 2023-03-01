const express = require('express');
const mongoose = require('mongoose');
const Activity = require('./models/activity');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;

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

app.post('/activities', async (req, res) => {
  const activity = new Activity(req.body);
  await activity.save();
  res.sendStatus(200);
});

app.get('/activities/:id', async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findById(id);
  res.send(activity);
});

app.put('/activities/:id', async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findByIdAndUpdate(id, { ...req.body });
  res.sendStatus(200);
});

app.delete('/activities/:id', async (req, res) => {
  const { id } = req.params;
  await Activity.findByIdAndDelete(id);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
