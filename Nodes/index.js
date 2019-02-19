let express = require('express');
let app = new express();
let cors = require('cors');




let info = require('./routes/info');
    app.use(cors());
    app.use(info);

    app.listen(3000,'localhost', function (params) {
        console.log('link start');
    });