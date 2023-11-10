const Post = require('../models/postModel');

// Контроллер для получения всех постов
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении постов' });
  }
};

// Контроллер для создания нового поста
const createPost = async (req, res) => {
  try {
    const { title, content, date } = req.body;
    const post = new Post({ title, content, date });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: `Ошибка при создании поста: ${error.message}` });
  }
};

// Контроллер для удаления поста по ID
const deletePost = async (req, res) => {
  try {
    const postId = req.params._id;
    const result = await Post.deleteOne({ _id: postId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Пост не найден' });
    }

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ошибка при удалении поста' });
  }
};

module.exports = { getPosts, createPost, deletePost };
