const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const items = [
  { id: 1, name: 'Item One', description: 'First example item' },
  { id: 2, name: 'Item Two', description: 'Second example item' },
  { id: 3, name: 'Item Three', description: 'Third example item' }
];

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Express API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      items: '/api/items'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/items', (req, res) => {
  res.json({ items });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
