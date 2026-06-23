const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('public'));

const API_KEY = 'YOUR_BIBLE_API_KEY'; // Get one from https://scripture.api.bible/
const API_URL = 'https://api.scripture.api.bible/v1/bibles';

app.get('/api/verse', async (req, res) => {
  const { reference } = req.query;
  try {
    const response = await axios.get(`${API_URL}/de4e12af7f28f599-01/verses/${reference}`, {
      headers: { 'api-key': API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch verse' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));