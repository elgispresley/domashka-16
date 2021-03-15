//(function(exports, require, module, ...) {
// const chalk = require('chalk');
// const text = require('./dz');

// console.log(chalk.blue(text));


//});

const http = require('http');
const fs = require('fs');
const path = require('path');
const { endsWith } = require('./dz');


const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // })
    //console.log(req.url)
//     if (req.url === '/')  {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (e, data) => {
//             if (e) {
//                 throw e
//             }
//             res.writeHead(200, {
//                 'Content-Type': 'text/html'
//             })
//             res.end(data)
//         })
//     } else  if (req.url === '/contact')  {
//         fs.readFile(path.join(__dirname, 'public', 'contact.html'), (e, data) => {
//             if (e) {
//                 throw e
//             }
//             res.writeHead(200, {
//                 'Content-Type': 'text/html'
//             })
//             res.end(data)
//         })
//     }
 let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html': req.url)
 const ext = path.extname(filePath)
 let contentType = 'text/html'
 switch (ext) {
     case '.css':
         contentType = 'text/css'
         break
         case '.js':
             contentType = 'text/javascript'
             break
             default:
                 contentType = 'text/html'
 }

 if(!ext) {
     filePath += '.html'
 }
 //console.log(filePath)


fs.readFile(filePath, (e, content) => {
    if (e) {
        fs.readFile(path.join(__dirname, 'public', 'error.html'), (e, data) => {
            if (e) {
                res.writeHead(500)
                res.end('Error')
            } else {
                res.writeHead(200, {
                    'content-type': 'text/html' 
                })
                res.end(data)
            }
        })
    } else {
        res.writeHead(200, {
            'content-type': contentType
        })
        res.end(content)
    }
})
})

const PORT = process.env.PORT || 3000

server.listen(3000, () => {
    console.log(`Server started on ${PORT}`)
});
