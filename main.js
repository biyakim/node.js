// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const app = http.createServer(function(req, res) {
//     let _url = req.url;
//     let queryData = url.parse(_url, true).query;
//     let pathname = url.parse(_url, true).pathname;

//     if(pathname === '/') {
//         if(queryData == undefined) {
//             res.writeHead(200);
//             res.end("undefined");
//         }else {
//             fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description) {
//                 const title = queryData.id;
//                 const tempLate = `
//                 <!DOCTYPE html>
//                 <html lang="en">
//                 <head>
//                 <meta charset="UTF-8">
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>아무거나</title>
//                 </head>
//                 <body>
//                 <h1>WEN</h1>
//                 <ul>
//                     <li><a href="/?id=HTML">HTML</a></li>
//                     <li><a href="/?id=CSS">CSS</a></li>
//                     <li><a href="/?id=JavaScript">JavaScript</a></li>
//                 </ul>
//                 <h2>${title}</h2>
//                 <p>${description}</p>
//                 </body>
//                 </html>`

//                 res.writeHead(200);
//                 res.end(tempLate);
//             })
//         }
//     }
//     res.end(queryData.id);
// })

// app.listen(3333)

const express =require('express');
const app = express();

app.get('*', function(req,res,next) {
    console.log('당장')
    next();
})

app.get('/', function(req,res,next) {
    // res.send('Hello World')
    console.log('진행시켜')
})

app.get('/test/:name', function(req,res,next) {
    console.log('path', req.path) // '/test/JWP
    console.log('params', req.params); //{name : 'JWP}
    console.log('query', req.query);    // {Lang : 'ko'}
    res.send('test중 콘솔을 보시오')
});

app.listen(3333)
