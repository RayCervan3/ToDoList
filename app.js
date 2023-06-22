const express = require('express');
const app = express();
const port = 3000;
const date = require(__dirname + '/date.js')

const Items = ['Buy Food', 'Cook Food', 'Eat Food']; // with const arrays we can still push variables
const workItems = [];

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs'); // EJS (Embedded JavaScript templating) is a simple templating language that lets you generate HTML markup with plain JavaScript.

// root page
app.get('/', function(req, res) {
    
    const day = date.getDate(); // comes from the module creates by our own const date = require(__dirname + '/date.js')

    res.render('list', {
        listTitle: day,
        newListItems: Items
    });

});

// add new item post method handler
app.post('/', function(req, res){
    
    const addItem = req.body.newItem;

    if(req.body.list === 'Work'){
        workItems.push(addItem);
        res.redirect('/work');
    } else {
        Items.push(addItem);
        res.redirect("/");
    };
    

});

// work page

app.get('/work', function (req, res) { 
    res.render('list', {
        listTitle: 'Work List',
        newListItems: workItems
    });
 });

 app.post('/work', function(req, res){
    const additem = req.body.newItem
    workItems.push(additem);
    res.redirect('/work')
 })

 app.get('/about', function(req, res){
    res.render('about');
 });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));