const mongoose = require('mongoose');
const cities = require('all-the-cities');
const { activities } = require('./activities');
const Activity = require('../models/activity');

mongoose.set('strictQuery', false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/to-travel-do');
}

const sample = (array) => array[Math.floor(Math.random() * array.length)];
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean felis mi, sodales non blandit feugiat, condimentum quis nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc metus mauris, faucibus a ante quis, tristique blandit nisi. In non enim porta, mattis turpis et, aliquam eros. Cras ornare tellus condimentum lacus porttitor, vel consequat lectus mattis. Pellentesque efficitur efficitur bibendum. Integer quis leo est. Duis quis facilisis lectus. Integer sed ipsum nec leo vehicula porta at non mauris. Nulla facilisi. Vivamus nec felis augue. Mauris semper tempus erat, a congue turpis pellentesque eget. Donec in sem non nisl gravida pharetra at id diam. Nulla ac orci nisl.';

const seedDB = async () => {
  await Activity.deleteMany({});
  for (let i = 0; i < 10; i++) {
    const randomCity = sample(cities);
    const activity = new Activity({
      name: sample(activities),
      description: lorem,
      location: `${randomCity.name}, ${randomCity.country}`,
      images: [
        'https://images.unsplash.com/photo-1544878221-8adae82e4538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      ],
    });
    await activity.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
