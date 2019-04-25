/* requires */
const express = require('express');
const hbs = require('hbs');
require('./helpers/helpers');


/* Constants */
const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.static(__dirname + '/public'))

 
app.get('/', (req, res) => {
  res.render('home.hbs', {
    name: 'Paco Panter' 
    });
});
 
app.get('/about', (req, res) => {
    res.render('about.hbs');
  });


app.listen(port, () => console.log(`Listen on port ${port}`));
