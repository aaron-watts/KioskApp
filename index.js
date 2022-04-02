const express = require('express');
const app = express();
const PORT = 3000;

const adminRoute = require('./routes/admin.js');
const userRoute = require('./routes/user.js');
const eventRoute = require('./routes/event.js');
const sessionRoute = require('./routes/session.js');

app.use('/admin', adminRoute);
app.use('/user', userRoute);
app.use('/event', eventRoute);
app.use('/session', sessionRoute);

app.get('/', (req, res) => res.send('Welcome to Home!'));

app.listen(PORT, () => console.log(`Serving on ${PORT}`));
