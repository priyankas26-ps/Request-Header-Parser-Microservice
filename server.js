const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip;
  const language = req.get('Accept-Language');
  const software = req.get('User-Agent');

  res.json({
    ipaddress,
    language,
    software
  });
});

app.listen(port, () => {
  console.log(`Request Header Parser running on port ${port}`);
});