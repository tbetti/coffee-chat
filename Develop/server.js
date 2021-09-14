const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Link routes in controller
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http//:localhost:${PORT}`));
});
