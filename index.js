const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Welcome to Home!'));

app.listen(PORT, () => console.log(`Serving on ${PORT}`));
