
const express = require('express');
const os = require('os');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
    const replicaId = process.env.HOSTNAME || 'Unknown';
    const serviceName = process.env.SERVICE_NAME || 'Unknown';
    res.send(`Request handled by replica ${replicaId} of service ${serviceName}`);
    next();
  });
  

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
