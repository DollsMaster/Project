let express = require('express')
let router = express.Router();
let msl = require('../models/MySql.js');
let bodyParser = require('body-parser');
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({extended: false}));
    router.get('/person', (req, res)=>{
        msl.query('select * from person', function(error, result, f){
            if (error) {
                console.log('查询出错!');
            }
            res.json(result);
        }); 
    });
    router.post('/person',(req, res)=>{
        console.log('findss');
        console.log(req.body);
        
        /* let addDataStr = '';
        let addDataArray = [];
            for(let key in req.body){
                addDataArray.push(req.body[key]);
                addDataStr += key +',';
            }
            addDataStr = addDataStr.substring(0, addDataStr.length - 1) */
            
            
        //let addData = 'insert into person('+addDataStr+') values (?,?,?,?,?,?)';
        let addData = 'insert into person(name, age, love, job, address, birthday) values (?,?,?,?,?,?)';
        let addParams = [req.body.name,req.body.age,req.body.love,req.body.job,req.body.address,req.body.birthday];
            console.log(addData);
            console.log(addParams);
            msl.query(addData, addParams, (error, result)=>{
                if (error) {
                    console.log('error');
                }
                console.log(result);
                res.json(result);
            }); 
        /* let addData = 'insert into person(name, age, love, job, address, birthday) values (?,?,?,?,?,?)';
        let addParams = ['玛格特罗伊德.爱丽丝', 18, '人偶', '魔法师', '魔法之森', '2008-08-08']; */
            /* msl.query(addData, addParams, ()=>{

            }); */

        
    })
    module.exports = router;
