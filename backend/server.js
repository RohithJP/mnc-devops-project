const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Jenkins auto deploy WORKING');
});

app.get('/api/time', (req, res) => {
  res.json({ time: new Date() });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
