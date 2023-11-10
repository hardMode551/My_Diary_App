const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const { postValidationRules, validate } = require('./validations/postValidation');
const { getPosts, createPost, deletePost } = require('./controllers/PostController');

const app = express();
const port = 3000;

// Подключение к MongoDB
mongoose
  .connect(
    'mongodb+srv://admin:admin@clusterblog.szmuwo8.mongodb.net/post?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('Успешное подключение к базе данных'))
  .catch((err) => console.log('Ошибка подключения к базе данных:', err));

app.use(bodyParser.json());

// Включение поддержки CORS
app.use(cors());

// Маршрут для получения всех постов
app.get('/posts', getPosts);

// Маршрут для создания нового поста с валидацией
app.post('/createPost', postValidationRules(), validate, createPost);

// Маршрут для удаления поста по ID
app.delete('/removePost/:_id', deletePost);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
