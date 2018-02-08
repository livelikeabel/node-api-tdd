const express = require('express');
const app = express();

function commonmw(req, res, next){
    console.log('commonmw');
    next();
}

function errormw(err, req, res, next){
    console.log(err.message);
    //전달받은 에러를 잘 처리 하거나 : next()
    next(err);//다음 미들웨어에게 에러를 넘긴다
}

app.use(commonmw);
app.use(errormw);

app.listen(3000, function(){
    console.log('Server is running');
})
