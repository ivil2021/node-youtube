const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Folder was created');
// });

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, 'Hello NodeJS!', (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('File was created');

//   fs.appendFile(filePath, '\nHello Again!', (err) => {
//     if (err) {
//       throw err;
//     }

//     console.log('File was created');
//   });
// });

fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err;
  }

  console.log('content: ', content);
});
