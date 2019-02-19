let msl = require('../models/MySql');

let express = require('express')
let router = express.Router();
let bodyParser = require('body-parser');

    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({extended: false}));

    router.get('/info', (req, res)=>{
        msl.query('select * from datatable', (error, result)=>{
            if(error) {
                res.json({
                    code: '1',
                    data: null,
                    result: 'success',
                    message: '服务器出现错误!',
                });
                return;
            }
            if (result.length === 0) {
                res.json({
                    data: null,
                    code: '0',
                    result: 'success',
                    message: '您查询的数据为空!',
                });
                return;
            }
            if (result.length > 0) {
                res.json({
                    data: result,
                    code: '0',
                    result: 'success',
                    message: '查询数据成功!',
                });
            }
        });
        
    });
    /*  */
    module.exports = router;