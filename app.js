const express = require('express');
const path = require('path');
const cons = require('consolidate');

// init app
const app= express();
//load nex engine
app.engine('html',cons.swig);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
//home route
app.get('/',function (req,res) {
  res.render('index');
});
//add route
app.get('/articels/add',function (req,res) {
  res.render('add_article');
});
//start server
app.listen(3000,function () {
  console.log('serv start on 3000...');
});
