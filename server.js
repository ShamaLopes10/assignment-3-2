// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Default to port 5000, or use environment variable

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
