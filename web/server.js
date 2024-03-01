const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Allows us to parse JSON bodies

// POST route that receives text
app.post('/api/print', (req, res) => {
  const { text } = req.body; // Extract text from the body
  console.log(`Received from frontend: ${text}`);
  res.json({ message: `Backend received: ${text}` });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
