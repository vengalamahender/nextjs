const express = require('express');
const mongoose = require('mongoose');


const app = express();

// connect to the mongodb

const dbURI ='mongodb+srv://mahender:<>@cluster0.9ruwhwz.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI)
        .then((result) => console.log('connected successfully',result))
        .catch((err) => console.log(err))

app.set('view engine','ejs')

 //     console.log(req.path)
//     console.log(req.hostname)
//     console.log(req.method)
//     next();
// })
app.use(express.static('public'));
app.get('/',(req,res)=>{

    const title = 'Home'
    const blogs = [
        {title:'Mahender Blog',snippet:'Mahender Description'},
        {title:'Ramesh Blog',snippet:'Ramesh Description'},
        {title:'Suresh Blog',snippet:'Suresh Description'}
    ]
    res.render('index',{title,blogs})
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})

app.use((req,res)=>{
    res.render('404',{title:'404'})
})

