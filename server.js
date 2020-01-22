const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');


let path = require("path");

const app = express();
const PORT = process.env.PORT || 3009;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());


require('./routing/html-routes.js')(app);
// require('./public/app.js');

app.listen(PORT, function () {
    (console.log(colors.rainbow(`App listening on http://localhost:${PORT}`)))
});