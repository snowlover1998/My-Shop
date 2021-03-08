const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebar = require('express-handlebars');
const methodOverride = require('method-override');

const route = require('./routes/index');
const db = require('./config/db/db.config')

//connect to DB
db.connect();

var app = express();
const port = 3500;

app.engine(
  'hbs',
  handlebar({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'resources', 'views', 'partials'),
    helpers: require('./helpers/handlebars'),
  }),
);

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'authen')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});