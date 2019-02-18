let express = require('express');
let Person = require('./routes/person.js');
    
let app = new express();
let cors = require('cors');

    app.use(cors());
    app.use(Person);

    /* app.get('/person',(req, res)=>{
        console.log('ffffffffff');
        
    }); */

    app.listen(3000,'localhost');