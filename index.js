const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();
const port = 443; // The default port for HTTPS is 443

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

app.use(express.json()); // Middleware to parse JSON data from the request body

// Create an API endpoint to receive the blocklist data from the client
app.post('/updateBlocklist', (req, res) => {
  try {
    const blocklistData = req.body; // The blocklist data sent from the client
    fs.writeFileSync('blocklist.json', JSON.stringify(blocklistData, null, 2));
    res.json({ success: true });
  } catch (err) {
    console.error('Error while updating blocklist:', err);
    res.status(500).json({ error: 'Error while updating blocklist' });
  }
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`HTTPS server is running on port ${port}`);
});
