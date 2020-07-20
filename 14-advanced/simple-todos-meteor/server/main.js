import { Meteor } from 'meteor/meteor';
import Tasks from '../imports/api/tasks'; // Model

function insertTask(text) {
  Tasks.insert({ text: text, createdAt: new Date() });
}

Meteor.startup(() => {
  // Seed the database if empty
  if (Tasks.find().count() === 0) {
    [
      'First task',
      'Second task',
      'Third task',
      'Fourth task',
      'Fifth task',
      'Sixth task',
      'Seventh task'
    ].forEach(insertTask);
  }
});
