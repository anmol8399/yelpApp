var express = require('express');
var app = express();
const port = 1234;

app.set('view engine', 'ejs');


app.get('/',function(req, res){
    // res.send('this will be the landing page');
    res.render('landing');
});

app.get('/campgrounds', function(req,res){
    var campgrounds = [
            {name: "Anmol", image: "http://uat.immunityhealth.me/admin/img/logo.png"},
            {name: "Immunity", image: "http://uat.immunityhealth.me/admin/img/logo.png"},
            {name: "Health", image: "http://uat.immunityhealth.me/admin/img/logo.png"},
            {name: "Image", image: "http://uat.immunityhealth.me/admin/img/logo.png"},
        
    ]
    res.render('campgrounds');
})

app.listen(port, function(){
    console.log('Yelp has started');
    console.log(process.env.PORT);
});
