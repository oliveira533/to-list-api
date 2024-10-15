const express = require('express');
const mongoose = requise('mongoose');
const Task = require('./models/task');

const app = express();
app.use(express.json);
app.use(express.urlencoded({extended: true}))