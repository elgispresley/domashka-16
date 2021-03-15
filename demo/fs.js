//file system
const fs = require('fs');
const path = require('path')
// fs.mkdir(path.join(__dirname, 'text'), (e) => {
//    if (e){
//        throw e
//    }
//    console.log('Папка создана');
// })

const filePath = path.join(__dirname, 'text', 'text.txt');

// fs.writeFile(filePath, 'hello', e => {
//    if (e) {
//        throw e
//    }
//    console.log('Файл создан');
// });

// fs.appendFile(filePath, '\nhello suka', e => {
//     if (e) {
//         throw e
//     }
//     console.log('Файл создан');
//  });

fs.readFile(filePath, 'utf-8', (e, content) => {
    if (e) {
        throw e
    }
    console.log(content);
    // const data = Buffer.from(content);
    // console.log('Content: ', content);
})