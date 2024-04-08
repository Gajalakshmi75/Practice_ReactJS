// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Define your API route
app.get('/api/data', (req, res) => {
  // Assuming you're fetching data from somewhere
  const data = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
