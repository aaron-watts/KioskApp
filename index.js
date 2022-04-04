const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');
const engine = require('ejs-mate');

app.engine('ejs', engine);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const adminRoute = require('./routes/admin.js');
const userRoute = require('./routes/user.js');
const eventRoute = require('./routes/event.js');
const sessionRoute = require('./routes/session.js');

app.use('/admin', adminRoute);
app.use('/user', userRoute);
app.use('/event', eventRoute);
app.use('/session', sessionRoute);

app.get('/', (req, res) => res.render('index'));

app.listen(PORT, () => console.log(`Serving on ${PORT}`));

