var express = require("express");
// const expressLayouts = require("express-ejs-layouts");

var app = express();
const port = 5000;

// app.use(expressLayouts)
app.set("view engine", "ejs")

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
})
// app.get('/about', (req, res) => {
//     res.render('about');
// })
    app.listen(port, () => console.info(`App listening ${port}`));


