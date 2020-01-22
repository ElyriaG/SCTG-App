let path = require("path");

module.exports = function (app) {
    app.get('/weather', function (require, response) {
        response.sendFile(path.join(__dirname + './../public/chosenCity.html'));
    });
    app.use(function (require, response) {
        response.sendFile(path.join(__dirname + "./../public/home.html"));
    });
}