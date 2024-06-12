const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000
const { getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost } = require('./controllers/posts');
const { register, login } = require('./controllers/auth');

app.use(cors());
app.use(express.json());

app.post('/api/register', register);
app.post('/api/login', login);

app.get('/api/posts', getAllPosts);
app.get('/api/userposts/:userId', getCurrentUserPosts);
app.post('/api/posts', addPost);
app.put('/api/posts/:id', editPost);
app.delete('/api/posts/:id', deletePost);

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));