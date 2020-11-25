const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5000/"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res)=>{
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            // random으로 이미지를 보여주는 사이트로 64*64크기로 설정
            'name': 'chimy',
            'birthday': 951013,
            'gender': '남자',
            'job': '학생'
          },{
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            // random으로 이미지를 보여주는 사이트로 64*64크기로 설정
            'name': '치미',
            'birthday': 940824,
            'gender': '여자',
            'job': '개발자'
          },{
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            // random으로 이미지를 보여주는 사이트로 64*64크기로 설정
            'name': '침침',
            'birthday': 951124,
            'gender': '남자',
            'job': '프리랜서'
          }
    ]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));