const mongoose = require('mongoose');
const Task = require('../src/models/taskmodel');

beforeAll(async () => {
  const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/taskManagerTest';
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterEach(async () => {
  await Task.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

test('Deve criar uma nova tarefa', async () => {
  const task = new Task({ title: 'Nova tarefa', completed: false });
  const savedTask = await task.save();

  expect(savedTask.title).toBe('Nova tarefa');
  expect(savedTask.completed).toBe(false);
});