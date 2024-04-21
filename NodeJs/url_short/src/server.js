// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/shorten', async (req, res) => {
  const { url } = req.query;
  try {
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to shorten URL' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
